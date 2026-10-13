import { ArrowUpRight } from "lucide-react";
import contact from "../data/contact.json";

/** A direct, user-initiated chat link. No chat messages are sent by the site. */
export function WhatsAppLauncher() {
  return (
    <a
      className="whatsapp-launcher"
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Muhammad Ahmad on WhatsApp (opens in a new tab)"
      title="Chat on WhatsApp"
    >
      <span className="whatsapp-launcher-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.98 11.98 0 0 0 5.85 1.49h.01C18.66 23.86 24 18.49 24 11.89c0-3.2-1.23-6.21-3.48-8.41ZM12.06 21.84a9.92 9.92 0 0 1-5.06-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.91 9.91 0 0 1-1.52-5.29c0-5.48 4.46-9.94 9.94-9.94a9.86 9.86 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.91 7.04c0 5.48-4.46 9.85-10.01 9.85Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.52.72.31 1.27.5 1.7.64.71.23 1.36.2 1.88.12.57-.09 1.77-.73 2.02-1.43.25-.69.25-1.29.17-1.42-.07-.12-.27-.19-.57-.34Z" />
        </svg>
      </span>
      <span className="whatsapp-launcher-label">Let’s chat</span>
      <ArrowUpRight className="whatsapp-launcher-arrow" size={15} aria-hidden="true" />
    </a>
  );
}
