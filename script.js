(function () {
  var logo = document.querySelector(".topbar__logo");
  if (!logo) return;

  var timer = null;

  logo.addEventListener("click", function (event) {
    event.preventDefault();

    if (timer) {
      clearTimeout(timer);
      timer = null;
      logo.classList.remove("is-winking");
      void logo.offsetWidth; /* reinicia la animación si se hace clic seguido */
    }

    logo.classList.add("is-winking");
    timer = setTimeout(function () {
      logo.classList.remove("is-winking");
      timer = null;
    }, 620);
  });
})();
