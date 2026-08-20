import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You are offline",
  description: "The Republic will be right back.",
};

/**
 * Shown by the service worker when a page is requested with no network and no
 * cached copy. Styled inline so it reads even if the stylesheet is not cached.
 */
export default function OfflinePage() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        color: "#1f5130",
      }}
    >
      <div style={{ fontSize: "3rem", lineHeight: 1 }} aria-hidden="true">
        🐔
      </div>
      <h1
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 800,
          fontSize: "2rem",
          margin: "1rem 0 0.5rem",
        }}
      >
        The Republic is offline
      </h1>
      <p style={{ maxWidth: "34ch", color: "#4a4a45" }}>
        There is no connection right now. The flock is fine, they just cannot
        reach you. Check your network and try again; pages you have already
        visited will still open.
      </p>
    </div>
  );
}
