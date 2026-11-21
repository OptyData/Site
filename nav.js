/* Opty Data site header. Include right after <body>: <script src="/nav.js"></script> */
(function () {
  var L = [["/", "Home", "🏠"], ["/vibes/", "Market Vibes", "🎛️"], ["/spread-desk/", "Index Insurance", "🧾"],
           ["/kpi/", "KPI Tracker", "📊"], ["/calendar/", "Calendar", "🗓️"], ["/data/", "Data Sources", "🛰️"]];
  var p = location.pathname.replace(/index\.html$/, "");
  var css = ".onav{position:sticky;top:0;z-index:50;background:rgba(14,27,44,.96);backdrop-filter:saturate(1.4) blur(8px);-webkit-backdrop-filter:saturate(1.4) blur(8px);color:#fff;font:500 14.5px/1.2 'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif}" +
    ".onav-in{max-width:1160px;margin:0 auto;display:flex;align-items:center;gap:14px;padding:0 16px;height:54px}" +
    ".onav-brand{display:flex;align-items:center;gap:8px;font:800 18px/1 'Bricolage Grotesque','DM Sans',system-ui,sans-serif;letter-spacing:-.02em;color:#fff;text-decoration:none;white-space:nowrap}" +
    ".onav-dot{width:22px;height:22px;border-radius:7px;background:conic-gradient(from 210deg,#2f6bff,#16a457,#f2b705,#f2542d,#2f6bff);box-shadow:inset 0 0 0 4px #0e1b2c}" +
    ".onav-links{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none;margin-left:auto;-webkit-overflow-scrolling:touch}.onav-links::-webkit-scrollbar{display:none}" +
    ".onav-links a{color:#c9d3e1;text-decoration:none;padding:8px 11px;border-radius:999px;white-space:nowrap}" +
    ".onav-links a:hover{color:#fff;background:rgba(255,255,255,.08)}.onav-links a[aria-current]{color:#0e1b2c;background:#fff;font-weight:700}" +
    ".onav-links a:focus-visible,.onav-brand:focus-visible{outline:3px solid #7fa6ff;outline-offset:2px}" +
    ".onav-links i{font-style:normal;margin-right:5px}" +
    "@media (max-width:820px){.onav-in{height:auto;flex-wrap:wrap;padding:10px 16px 6px;gap:6px}.onav-links{margin-left:0;width:100%;padding-bottom:4px;flex-wrap:wrap;overflow:visible}.onav-links a{padding:7px 10px;font-size:13.5px}}";
  var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
  var n = document.createElement("nav"); n.className = "onav"; n.setAttribute("aria-label", "Opty Data");
  n.innerHTML = '<div class="onav-in"><a class="onav-brand" href="/"><span class="onav-dot" aria-hidden="true"></span>Opty Data</a><div class="onav-links">' +
    L.slice(1).map(function (x) { return '<a href="' + x[0] + '"' + (p === x[0] ? ' aria-current="page"' : '') + '><i aria-hidden="true">' + x[2] + '</i>' + x[1] + '</a>'; }).join("") + '</div></div>';
  document.body.insertBefore(n, document.body.firstChild);
  var b = getComputedStyle(document.body), px = function (v) { return parseFloat(v) || 0; };
  var t = px(b.marginTop) + px(b.paddingTop), l = px(b.marginLeft) + px(b.paddingLeft), r = px(b.marginRight) + px(b.paddingRight);
  if (t || l || r) { n.style.margin = "-" + t + "px -" + r + "px " + t + "px -" + l + "px"; }
  if (!document.getElementById("opty-sd-fonts") && !document.querySelector('link[href*="Bricolage"]')) {
    var f = document.createElement("link"); f.id = "opty-sd-fonts"; f.rel = "stylesheet";
    f.href = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap";
    document.head.appendChild(f);
  }
})();
