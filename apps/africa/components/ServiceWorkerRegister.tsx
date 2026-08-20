"use client";

import { useEffect } from "react";

/**
 * Registers the service worker after load so it never competes with the first
 * paint. Failures are swallowed: the site works fine without it, the worker
 * only adds installability and offline caching.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    };
    if (document.readyState === "complete") register();
    else {
      window.addEventListener("load", register, { once: true });
      return () => window.removeEventListener("load", register);
    }
  }, []);
  return null;
}
