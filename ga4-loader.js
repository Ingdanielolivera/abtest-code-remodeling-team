(function () {
  "use strict";
  const GA4_ID = "G-MCWPVFDL4E";

  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA4_ID}"]`)) {
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
      document.head.appendChild(s);
    }

    if (!window.__ga4Configured) {
      window.gtag("js", new Date());
      window.gtag("config", GA4_ID);
      window.__ga4Configured = true;
    }
  } catch (e) {
    console.warn("[GA4] falló:", e);
  }
})();
