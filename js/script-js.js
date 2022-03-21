function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "active";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.nextElementSibling.classList.toggle(activeClass);
      this.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSmooth() {
  const linkInterno = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linkInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSmooth();

function scrollBgFixed() {
  const header = document.querySelector("header");
  const sticky = header.getBoundingClientRect().top;
  function animaScroll() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else if (window.pageYOffset === sticky) {
      header.classList.remove("sticky");
    }
  }
  window.onscroll = function () {
    animaScroll();
  };
}
scrollBgFixed();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const halfWindowHeight = window.innerHeight * 0.58;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - halfWindowHeight < 0;
        if (sectionVisible) {
          section.classList.add("active");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();

function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector('[data-menu="list"]');
  function openMenu(event) {
    menuList.classList.toggle("active");
    menuButton.classList.toggle("active");
  }
  menuButton.addEventListener("click", openMenu);
}
initMenuMobile();
