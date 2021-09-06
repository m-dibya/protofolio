var theDelay = 3.5;
var timer = setTimeout("typeWriter()", theDelay * 1000);
function showText() {
  document.getElementById("demo").style.visibility = "visible";
}

var i = 0;
var txt = "I am a Btech computer science undergraduate student.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const observer1 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      var number1 = document.getElementById("number1");
      var countre1 = 0;
      setInterval(() => {
        if (countre1 == 95) {
          clearInterval();
        } else {
          countre1 += 1;
        }
        number1.innerHTML = countre1 + "%";
      }, 55);
      entry.target.classList.add("animation-bar-1");
    }
  });
});

observer1.observe(document.querySelector(".bar-1"));

const observer2 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      var number2 = document.getElementById("number2");
      var countre2 = 0;
      setInterval(() => {
        if (countre2 == 80) {
          clearInterval();
        } else {
          countre2 += 1;
        }
        number2.innerHTML = countre2 + "%";
      }, 65);
      entry.target.classList.add("animation-bar-2");
    }
  });
});

observer2.observe(document.querySelector(".bar-2"));

const observe3 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      var number3 = document.getElementById("number3");
      var countre3 = 0;
      setInterval(() => {
        if (countre3 == 65) {
          clearInterval();
        } else {
          countre3 += 1;
        }
        number3.innerHTML = countre3 + "%";
      }, 75);
      entry.target.classList.add("animation-bar-3");
    }
  });
});

observe3.observe(document.querySelector(".bar-3"));

const observe4 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      var number4 = document.getElementById("number4");
      var countre4 = 0;
      setInterval(() => {
        if (countre4 == 75) {
          clearInterval();
        } else {
          countre4 += 1;
        }
        number4.innerHTML = countre4 + "%";
      }, 70);

      entry.target.classList.add("animation-bar-4");
    }
  });
});

observe4.observe(document.querySelector(".bar-4"));

const observe5 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      var number5 = document.getElementById("number5");
      var countre5 = 0;
      setInterval(() => {
        if (countre5 == 95) {
          clearInterval();
        } else {
          countre5 += 1;
        }
        number5.innerHTML = countre5 + "%";
      }, 55);
      entry.target.classList.add("animation-bar-5");
    }
  });
});

observe5.observe(document.querySelector(".bar-5"));

const observe6 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class

      var number6 = document.getElementById("number6");
      var countre6 = 0;
      setInterval(() => {
        if (countre6 == 67) {
          clearInterval();
        } else {
          countre6 += 1;
        }
        number6.innerHTML = countre6 + "%";
      }, 78);
      entry.target.classList.add("animation-bar-6");
    }
  });
});

observe6.observe(document.querySelector(".bar-6"));

const observe7 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      var number7 = document.getElementById("number7");
      var countre7 = 0;
      setInterval(() => {
        if (countre7 == 75) {
          clearInterval();
        } else {
          countre7 += 1;
        }
        number7.innerHTML = countre7 + "%";
      }, 70);
      entry.target.classList.add("animation-bar-7");
    }
  });
});

observe7.observe(document.querySelector(".bar-7"));

const observe8 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      var number8 = document.getElementById("number8");
      var countre8 = 0;
      setInterval(() => {
        if (countre8 == 60) {
          clearInterval();
        } else {
          countre8 += 1;
        }
        number8.innerHTML = countre8 + "%";
      }, 88);

      entry.target.classList.add("animation-bar-8");
    }
  });
});

observe8.observe(document.querySelector(".bar-8"));

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");
  });

  $(".portfolio .button-container .btn").click(function () {
    let filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".portfolio .image-container .box").show("400");
    } else {
      $(".portfolio .image-container .box")
        .not("." + filter)
        .hide("200");
      $(".portfolio .image-container .box")
        .filter("." + filter)
        .show("400");
    }
  });

  $("#theme-toggler").click(function () {
    $(this).toggleClass("fa-sun");
    $("body").toggleClass("dark-theme");
  });

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },

      500,
      "linear"
    );
  });
});
