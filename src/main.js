import './main.css';

const mobileMenu = document.getElementById('mobile-menu')
const menuBtn = document.getElementById('menu-btn')

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})

//* ///////////////////////////////////////
const themeToggleBtns = document.querySelectorAll(".theme-btn");
const theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.documentElement.classList.add("dark");
}

themeToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light"); //or => remove the item from localStorage if you want to revert to system preference
    }
  });
});

