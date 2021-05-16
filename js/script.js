// const pict = document.querySelector(".first2");

// pict.addEventListener("click", function () {
//     console.log("okk")
// });

console.log("live");

$(function () {
  const nextSection = '<i class="fas fa-arrow-circle-right"></i>';
  const prevSection = '<i class="fas fa-arrow-circle-left"></i>';

  $(".home-slider").owlCarousel({
    //test
    stagePadding: 10,
    lazyLoad: true,
    //test
    loop: true,
    dots: false,
    margin: -170,
    nav: true,
    smartSpeed: 1000,
    navText: [prevSection, nextSection],
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
      },
      600: {
        items: 1,
        stagePadding: 100,
      },
      1000: {
        items: 1,
        stagePadding: 150,
      },
      1200: {
        items: 1,
        stagePadding: 200,
      },
      1400: {
        items: 1,
        stagePadding: 300,
      },
      // 1600: {
      //     items: 1,
      //     stagePadding: 300,
      //     margin: 60
      // },
      // 1800: {
      //     items: 1,
      //     stagePadding: 350,
      //     margin: 70
      // },
    },
  });
});
/*
// let bodyWidth = document.querySelector("body").clientWidth;
// let aJs = document.querySelector(".a-js");
// console.log(bodyWidth)
// console.log(aJs.style)


// if (bodyWidth < 700) {

//     aJs.style.float = "initial";
//     aJs.style.color = "red";
//     aJs.classList.remove("navigation");
// }
*/ //stupid proje

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("navigation");

console.log(navUl);
hamburger.addEventListener("click", function () {
  navUl.classList.toggle("show");
});
