import { projects as originalProjects } from "./original-projects";
import verification from "./verified-projects.json";
export type PortfolioProject = (typeof originalProjects)[number] & {
  githubUrl?: string;
  demoStatus?: string;
};
const imagePath = (src: string) =>
  "./images/" +
  src
    .split("/")
    .pop()!
    .replace(/\.[^.]+$/, ".webp");
export const projects: PortfolioProject[] = originalProjects.map((project) => {
  const gallery =
    project.slug === "learnify" || project.category === "Webflow"
      ? [project.image]
      : [...new Set(project.gallery)];
  const verified = (
    verification as Record<
      string,
      {
        githubUrl: string | null;
        status: string;
        image: string | null;
        contentMismatch: string | null;
      }
    >
  )[project.slug];
  const concept = !!verified?.contentMismatch;
  return {
    ...project,
    image: verified?.image || imagePath(project.image),
    gallery: verified?.image ? [verified.image] : gallery.map(imagePath),
    githubUrl: verified?.githubUrl || undefined,
    demoStatus: verified?.status === "rendered" ? "available" : "unavailable",
    tags: concept
      ? [...project.tags.filter((t) => t !== "React"), "Concept project"]
      : project.tags,
    longDescription:
      project.longDescription +
      (concept
        ? " This is an independent interface study. The live demo uses Netflix branding; it is not an affiliated or commissioned Netflix website."
        : ""),
  };
});
export const featuredProjects = projects.slice(0, 5);
