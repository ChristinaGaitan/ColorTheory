window.onload = function() {
  const productImage = document.querySelector(".card__img");

  // replace the emoji with an svg version that will scale to larger sizes
  twemoji.parse(productImage, {
    folder: "svg",
    ext: ".svg",
    callback: function (icon, options, variant) {
      productImage.style.display = "block";

      return "".concat(options.base, options.size, "/", icon, options.ext);
    }
  });
};
