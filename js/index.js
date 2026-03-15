console.log("Hello, world!");

const banner = document.getElementById("banner");
const header = document.getElementById("font-header");
const menu = document.getElementById("group-2");
const burguer = document.getElementById("burguer");
const close = document.getElementById("close");
const im = document.getElementById("im");
const cm = document.getElementById("cm");

const observer = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  },
  {
    root: null,
    threshold: 0.8,
  },
);

observer.observe(banner);

burguer.addEventListener("click", () => {
  console.log("Burguer");
  menu.classList.add("active");
});

function Close() {
  console.log("Cancel");
  menu.classList.remove("active");
}

close.addEventListener("click", Close);
im.addEventListener("click", Close);
cm.addEventListener("click", Close);
