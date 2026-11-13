/* ==========================================================================
   Open external links and file downloads (PDF, BibTeX, ...) in a new tab,
   while links between pages of this site keep opening in the same tab.
   ========================================================================== */

(function () {
  var fileExt = /\.(pdf|bib|zip|tar|gz|ppt|pptx|doc|docx|xls|xlsx|csv|txt|png|jpe?g|gif|svg|mp4|mov)$/i;

  function update() {
    var links = document.querySelectorAll("a[href]");
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || /^(mailto|tel|javascript):/i.test(href)) continue;
      if (a.hasAttribute("target")) continue;

      var external = a.hostname && a.hostname !== window.location.hostname;
      var file = fileExt.test(a.pathname);
      if (external || file) {
        a.setAttribute("target", "_blank");
        var rel = (a.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
        ["noopener", "noreferrer"].forEach(function (r) {
          if (rel.indexOf(r) === -1) rel.push(r);
        });
        a.setAttribute("rel", rel.join(" "));
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", update);
  } else {
    update();
  }
})();
