const throttle = (delay, fn) => {
  let inThrottle = false;

  return (args) => {
    if (inThrottle) {
      return;
    }

    inThrottle = true;
    fn(args);
    setTimeout(() => {
      inThrottle = false;
    }, delay);
  };
};

const debounce = (delay, fn) => {
  let inDebounce = null;
  return (args) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => fn(args), delay);
  };
};
let lazyImages = [...document.querySelectorAll(".lazy-image")];
console.log("lazyimage: " + lazyImages);
let inAdvance = 300;

function lazyLoad() {
  lazyImages.forEach((image) => {
    console.log("offsetTop:" + image.offsetTop);
    console.log("pageYOffset:" + window.pageYOffset);
    console.log("innerHeight:" + window.innerHeight);
    console.log(
      "total: " + (window.innerHeight + window.pageYOffset + inAdvance)
    );
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      image.src = image.dataset.src;
      image.onload = () => image.classList.add("loaded");
    }
  });

  // if all loaded removeEventListener
}

lazyLoad();

window.addEventListener("scroll", throttle(1000, lazyLoad));
window.addEventListener("resize", throttle(1000, lazyLoad));
