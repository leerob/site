import Script from "next/script";

export function Analytics() {
  return typeof window !== "undefined" && window.location.href.includes('svirins') ? (
    <Script src="/bee.js" data-api="/_hive" strategy="afterInteractive" />
  ) : null;
}
