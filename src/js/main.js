document.addEventListener("DOMContentLoaded", function () {
  preCheck();
});

function preCheck() {
  init();
}

function init() {
  navigationDesktop.init();
  navigationMobile.init();
  navigationHover.init();
}

// Function to handle window resize
function handleResize() {
  // Get the element you want to remove the class from
  const mainElm = document.querySelector(".mainmenu");
  const subElm = document.querySelector(".sub__menu__main");

  // Check window width
  if (window.innerWidth < 1024) {
    // Remove the class from the element
    mainElm.classList.remove("is__active");
    subElm.classList.remove("is__active");
  }
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);

// Call the function initially to handle the case where the window is already resized below 1024px
handleResize();

var navigationHover = {
  init: function () {
    // Get the image element
    const carImage = document.getElementById("carImage");
    const carImageMain = document.getElementById("carImageMain");

    // Get all links in the sub menu
    const links = document.querySelectorAll(".sub__menu__level_one a");

    // Loop through each link
    links.forEach((link) => {
      // Add event listener for hover
      link.addEventListener("mouseenter", function () {
        // Check if the link has a data-img attribute
        const imgData = this.getAttribute("data-img");
        if (imgData) {
          // Change the image src attribute
          carImage.src = `./${imgData}.jpg`;
          carImageMain.src = `./${imgData}.jpg`;
        }
      });

      // Add event listener for mouseout (optional - if you want to change the image back)
      link.addEventListener("mouseleave", function () {
        // Change the image src attribute back to the default
        carImage.src = "./models-0.991c85cf.jpg";
        carImageMain.src = "./models-0.991c85cf.jpg";
      });
    });
  },
};

var navigationMobile = {
  init: function () {
    const pageHeader = document.querySelector(".main__navigation");
    const toggleMenu = pageHeader.querySelector(".mobile__menu__button");
    const menuWrapper = pageHeader.querySelector(".menu-wrapper");
    const level1Links = pageHeader.querySelectorAll(".level-1 > li > button");
    const listWrapper2 = pageHeader.querySelector(".list-wrapper:nth-child(2)");
    const listWrapper3 = pageHeader.querySelector(".list-wrapper:nth-child(3)");

    const subMenuWrapper2 = listWrapper2.querySelector(".sub-menu-wrapper");
    const subMenuWrapper3 = listWrapper3.querySelector(".sub-menu-wrapper");
    const backOneLevelBtns = pageHeader.querySelectorAll(".back-one-level");
    const isVisibleClass = "is-visible";
    const isActiveClass = "is-active";

    toggleMenu.addEventListener("click", function () {
      menuWrapper.classList.toggle(isVisibleClass);
      if (!this.classList.contains(isVisibleClass)) {
        toggleMenu.classList.add(isVisibleClass);
        listWrapper2.classList.remove(isVisibleClass);
        listWrapper3.classList.remove(isVisibleClass);
        const menuLinks = menuWrapper.querySelectorAll("button");
        for (const menuLink of menuLinks) {
          menuLink.classList.remove(isActiveClass);
        }
      } else {
        toggleMenu.classList.remove(isVisibleClass);
      }
    });

    for (const level1Link of level1Links) {
      level1Link.addEventListener("click", function (e) {
        const siblingList = level1Link.nextElementSibling;
        if (siblingList) {
          e.preventDefault();
          this.classList.add(isActiveClass);
          const cloneSiblingList = siblingList.cloneNode(true);
          subMenuWrapper2.innerHTML = "";
          subMenuWrapper2.append(cloneSiblingList);
          listWrapper2.classList.add(isVisibleClass);
        }
      });
    }

    listWrapper2.addEventListener("click", function (e) {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "button" &&
        target.nextElementSibling
      ) {
        const siblingList = target.nextElementSibling;
        e.preventDefault();
        target.classList.add(isActiveClass);
        const cloneSiblingList = siblingList.cloneNode(true);
        subMenuWrapper3.innerHTML = "";
        subMenuWrapper3.append(cloneSiblingList);
        listWrapper3.classList.add(isVisibleClass);
      }
    });
    listWrapper3.addEventListener("click", function (e) {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "button" &&
        target.nextElementSibling
      ) {
        const siblingList = target.nextElementSibling;
        e.preventDefault();
        target.classList.add(isActiveClass);
        const cloneSiblingList = siblingList.cloneNode(true);
        subMenuWrapper4.innerHTML = "";
        subMenuWrapper4.append(cloneSiblingList);
        listWrapper4.classList.add(isVisibleClass);
      }
    });

    for (const backOneLevelBtn of backOneLevelBtns) {
      backOneLevelBtn.addEventListener("click", function () {
        const parent = this.closest(".list-wrapper");
        parent.classList.remove(isVisibleClass);
        parent.previousElementSibling
          .querySelector(".is-active")
          .classList.remove(isActiveClass);
      });
    }
  },
};

var navigationDesktop = {
  init: function () {
    const openMenu = document.querySelectorAll(
      ".main__menu__item__holder__nested"
    );
    const mainMenuNav = document.querySelector(".mainmenu");
    const mainMenuNavLogo = document.querySelector(".bentley-logo");
    const closeMenu = document.querySelectorAll(".close__nav");
    const closeMenuBottom = document.querySelectorAll(".close__nav__bottom");
    const openLeveltwo = document.querySelectorAll(".has_sub_menu_level_two");
    const sub__menu__main = document.querySelectorAll(".sub__menu__main");
    //navCards = false;
    var navCards = false;

    for (const [elemIndex, elem] of openMenu.entries()) {
      elem.addEventListener("click", function () {
        for (const element of openMenu) {
          if (element === elem && !element.classList.contains("is__active")) {
            element.classList.add("is__active");
            mainMenuNav.classList.add("is__active");
            mainMenuNavLogo.classList.add("is__active");

            element.parentElement
              .querySelector(".close__nav")
              .classList.remove("is__active");
            document
              .querySelectorAll(".menu__nav__cards")
              .forEach((menu__nav__cards) => {
                if (navCards) {
                  menu__nav__cards.classList.remove("not__active");
                }
              });
            for (const item of element.parentElement.querySelectorAll(
              ".sub__menu__main .is__active"
            )) {
              item.classList.remove("is__active");
            }
          } else if (
            element === elem &&
            element.classList.contains("is__active")
          ) {
            mainMenuNav.classList.remove("is__active");
            element.classList.remove("is__active");
          } else {
            element.classList.remove("is__active");
            mainMenuNav.classList.remove("is__active");
            mainMenuNavLogo.classList.remove("is__active");
          }
        }

        for (const [index, megaMenu] of sub__menu__main.entries()) {
          if (
            index == elemIndex &&
            !megaMenu.classList.contains("is__active")
          ) {
            megaMenu.classList.add("is__active");
            mainMenuNav.classList.add("is__active");
            mainMenuNavLogo.classList.add("is__active");
          } else {
            megaMenu.classList.remove("is__active");
          }
        }
      });
    }

    // level two
    for (const [levelTwoIndex, levelTwo] of openLeveltwo.entries()) {
      const menu__nav__cards = levelTwo
        .closest(".mainmenu--item")
        .querySelector(".menu__nav__cards");

      levelTwo.querySelector("button").addEventListener("click", function () {
        levelTwo.classList.toggle("on");
        for (const [levelTwoIndexItem, levelTwoItem] of document
          .querySelectorAll(".sub__menu__level_two")
          .entries()) {
          if (
            levelTwoIndexItem == levelTwoIndex &&
            !levelTwoItem.classList.contains("is__active")
          ) {
            levelTwoItem.classList.add("is__active");

            //menu__nav__cards.style.visibility = "hidden";
            if (navCards) {
              menu__nav__cards.classList.add("not__active");
            }
          } else if (
            levelTwoIndexItem == levelTwoIndex &&
            levelTwoItem.classList.contains("is__active")
          ) {
            //menu__nav__cards.style.visibility = "visible";
            if (navCards) {
              menu__nav__cards.classList.remove("not__active");
            }
            levelTwoItem.classList.remove("is__active");
            for (const [levelThreeIndexItem, levelThreeItem] of document
              .querySelectorAll(".sub__menu__level_three")
              .entries()) {
              levelThreeItem.classList.remove("is__active");
            }
          } else {
            levelTwoItem.classList.remove("is__active");
            for (const [levelThreeIndexItem, levelThreeItem] of document
              .querySelectorAll(".sub__menu__level_three")
              .entries()) {
              levelThreeItem.classList.remove("is__active");
            }
          }
        }
      });
    }

    // close menu button
    for (const closeButton of closeMenu) {
      const menu__nav__cards = closeButton
        .closest(".mainmenu--item")
        .querySelector(".menu__nav__cards");

      closeButton.addEventListener("click", function () {
        closeButton.classList.toggle("is__active");
        if (closeButton.className.includes("is__active")) {
          mainMenuNav.classList.remove("is__active");
          mainMenuNavLogo.classList.remove("is__active");
          //menu__nav__cards.style.visibility = "visible";
          if (menu__nav__cards != null) {
            menu__nav__cards.classList.remove("not__active");
          }
          closeButton
            .closest(".sub__menu__main")
            .classList.remove("is__active");
          closeButton
            .closest(".mainmenu--item")
            .querySelector(".mainmenu--item-holder")
            .classList.remove("is__active");
        }
      });
    }

    // close bottom menu button
    for (const closeButton of closeMenuBottom) {
      closeButton.addEventListener("click", function () {
        closeButton.classList.toggle("is__active");
        if (closeButton.className.includes("is__active")) {
          mainMenuNav.classList.remove("is__active");
          mainMenuNavLogo.classList.remove("is__active");
          closeButton
            .closest(".sub__menu__main")
            .classList.remove("is__active");
          closeButton
            .closest(".mainmenu--item")
            .querySelector(".main__menu__item__holder")
            .classList.remove("is__active");
        }
      });
    }
  },
};
