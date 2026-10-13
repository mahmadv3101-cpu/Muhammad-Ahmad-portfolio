import { test, expect } from "@playwright/test";
import contact from "../client/src/data/contact.json" with { type: "json" };
test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".loader")).toHaveCount(0);
});
test("page is responsive and has no broken local images", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await expect(page).toHaveTitle(/Muhammad Ahmad/);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  expect(await page.locator("main").count()).toBe(1);
  expect(errors).toEqual([]);
});
test("laptop character loads fully inside the hero without covering its copy", async ({ page }) => {
  const avatar = page.locator(".hero-portrait");
  await expect(avatar).toHaveAttribute("src", "./images/ahmad-laptop.webp");
  await expect.poll(() => avatar.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBeTruthy();
  await page.waitForTimeout(1600);
  const bounds = await avatar.boundingBox();
  const copy = await page.locator(".hero-copy").boundingBox();
  expect(bounds).not.toBeNull();
  expect(copy).not.toBeNull();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(copy!.y);
});
test("menu navigates and restores keyboard access", async ({ page }) => {
  await page.locator(".top-nav button").click();
  await expect(page.getByRole("dialog", { name: "Site menu" })).toBeVisible();
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Contact" })
    .click();
  await expect(
    page.getByRole("dialog", { name: "Site menu" }),
  ).not.toBeVisible();
  await expect(page).toHaveURL(/#contact/);
});
test("all projects are included and filter/details work", async ({ page }) => {
  await expect(page.locator(".archive-card")).toHaveCount(11);
  await page.getByRole("button", { name: "Webflow", exact: true }).click();
  await expect(page.locator(".archive-card")).toHaveCount(2);
  await page.locator(".archive-image").first().click();
  await expect(page.locator("#project-title")).toHaveText("Forecaster");
  await page.getByRole("button", { name: "Close project details" }).click();
  await expect(page.locator(".project-dialog")).not.toBeVisible();
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator(".archive-card")).toHaveCount(11);
});
test("contact validates and composes but does not send", async ({ page }) => {
  await page.locator("button[type=submit]").click();
  await expect(page.locator(".email-draft")).toHaveCount(0);
  await page.locator("input[name=name]").fill("Portfolio test");
  await page.locator("input[name=email]").fill("test@example.com");
  await page
    .locator("textarea[name=message]")
    .fill("A test enquiry for browser validation only.");
  await page.locator("button[type=submit]").click();
  await expect(page.locator(".email-draft")).toBeVisible();
  const draftLink = await page.locator(".email-draft a").getAttribute("href");
  expect(draftLink?.split("?")[0]).toBe(`mailto:${contact.email}`);
  await expect(page.getByRole("status").last()).toContainText(
    "Nothing has been sent",
  );
});
test("project carousel has working manual controls", async ({ page }) => {
  await page.locator("#projects").scrollIntoViewIfNeeded();
  const before = await page.locator(".project-title-button").innerText();
  await page.getByRole("button", { name: "Next project", exact: true }).click();
  await expect(page.locator(".project-title-button")).not.toHaveText(before);
  await page.locator(".project-title-button").click();
  await expect(page.locator(".project-dialog")).toBeVisible();
});
test("profile does not show a country, location, or local clock", async ({ page }) => {
  const content = await page.locator("body").textContent();
  expect(content).not.toMatch(/pakistan|karachi|\bPKT\b|UTC\+5|local time|based in/i);
  await page.locator(".top-nav button").click();
  await expect(page.locator(".menu-dialog")).toBeVisible();
  expect(await page.locator(".menu-dialog").innerText()).not.toMatch(/local time|pakistan|\bPKT\b/i);
});
test("orange buttons retain their orange gradient on hover", async ({ page }) => {
  const button = page.locator(".top-nav .pill-orange");
  const before = await button.evaluate((el) => getComputedStyle(el).backgroundImage);
  await button.hover();
  await expect.poll(() => button.evaluate((el) => getComputedStyle(el, "::before").opacity)).toBe("1");
  const after = await button.evaluate((el) => getComputedStyle(el).backgroundImage);
  expect(before).toBe(after);
  expect(after).toContain("255, 74, 28");
});
test("fixed WhatsApp control opens the configured chat without sending", async ({ page, context }) => {
  const link = page.getByRole("link", { name: "Chat with Muhammad Ahmad on WhatsApp (opens in a new tab)" });
  await expect(link).toHaveAttribute("href", contact.whatsapp);
  expect(await link.evaluate((el) => getComputedStyle(el).position)).toBe("fixed");
  await page.locator("#about").scrollIntoViewIfNeeded();
  await expect(page.locator(".floating-nav")).toHaveClass(/visible/);
  const chat = await link.boundingBox();
  const nav = await page.locator(".floating-nav").boundingBox();
  expect(chat!.x).toBeGreaterThanOrEqual(nav!.x + nav!.width);
  await context.route("https://wa.me/**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: "<title>Chat navigation test — no message sent</title>" }));
  const popupPromise = context.waitForEvent("page");
  await link.click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  expect(popup.url()).toBe(contact.whatsapp);
  await popup.close();
});
test("footer is compact and all email links use the updated address", async ({ page }) => {
  await expect(page.locator(".footer-name")).toHaveCount(0);
  await expect(page.locator(".hero-name")).toHaveCount(1);
  await expect(page.locator(".contact-email a")).toHaveText("ahmad.dev2801@gmail.com");
  const emails = await page.locator('a[href^="mailto:"]').evaluateAll((links) => links.map((a) => a.getAttribute("href")!.split("?")[0]));
  expect(emails.length).toBeGreaterThan(0);
  expect(new Set(emails)).toEqual(new Set(["mailto:ahmad.dev2801@gmail.com"]));
  await page.locator("footer").scrollIntoViewIfNeeded();
  expect((await page.locator("footer").boundingBox())!.height).toBeLessThan(300);
});
