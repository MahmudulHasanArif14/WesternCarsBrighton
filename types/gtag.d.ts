export {};

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "consent" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
    dataLayer?: unknown[];
  }
}
