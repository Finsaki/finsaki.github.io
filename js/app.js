const menu = document.querySelector("#menu");
const menuItems = document.querySelectorAll(".menu-item");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].onmouseover = () => {
    menu.dataset.activeIndex = i;
  };
}
