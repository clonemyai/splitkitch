// SplitKitch landing: progressive enhancement only.
// The page works fully with JavaScript disabled. This script just adds a
// pressed-state fallback class for older browsers; CSS :active does the rest.
(function () {
  "use strict";
  document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("pointerdown", function () {
      btn.classList.add("is-pressed");
    });
    ["pointerup", "pointerleave", "pointercancel"].forEach(function (evt) {
      btn.addEventListener(evt, function () {
        btn.classList.remove("is-pressed");
      });
    });
  });
})();
