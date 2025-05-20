document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".header__menu-btn");
  const nav = document.querySelector(".header__bottom");
  const closeBtn = document.querySelector(".menu-close");

  menuBtn.addEventListener("click", function (e) {
    nav.classList.toggle("active");
    e.stopPropagation();
  });


  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      nav.classList.remove("active");
    });
  }

  document.addEventListener("click", function (e) {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      nav.classList.remove("active");
    }
  });
});

const openConsultBtn = document.getElementById("openFormBtn1");
const openConsultBtn3 = document.getElementById("openFormBtn3");
const consultModal = document.getElementById("consultModal");
const closeConsultBtn = document.getElementById("closeConsultBtn");

openConsultBtn.onclick = () => {
  consultModal.style.display = "block";
};

openConsultBtn3.onclick = () => {
  consultModal.style.display = "block";
};

closeConsultBtn.onclick = () => {
  consultModal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === consultModal) {
    consultModal.style.display = "none";
  }
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


const openBtn = document.getElementById("openFormBtn");
const openBtn2 = document.getElementById("openFormBtn2");
const modal = document.getElementById("formModal");
const closeBtn = document.getElementById("closeFormBtn");


openBtn.onclick = () => {
  modal.style.display = "block";
};
openBtn2.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};


const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const countSpan = counter.querySelector(".count");

    const speed = 100; 

    const updateCount = () => {
      const current = +countSpan.innerText;
      const increment = Math.ceil(target / speed);

      if (current < target) {
        countSpan.innerText = Math.min(current + increment, target);
        setTimeout(updateCount, 30); 
      } else {
        countSpan.innerText = target;
      }
    };

    updateCount();
  });
}

const statsSection = document.querySelector(".about-stats");
let statsStarted = false;

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !statsStarted) {
      animateCounters();
      statsStarted = true;
    }
  },
  { threshold: 0.6 }
);

observer.observe(statsSection);

const stepItems = document.querySelectorAll(".step-item");

const stepObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

stepItems.forEach((item) => stepObserver.observe(item));

new Swiper(".portfolio-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 0,
});

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("open");
  });
});

ymaps.ready(function () {
  const map = new ymaps.Map("yandex-map", {
    center: [53.889916, 27.587352],
    zoom: 16,
    controls: ["zoomControl", "fullscreenControl"],
  });

  const customPlacemark = new ymaps.Placemark(
    [53.889916, 27.587352],
    {
      balloonContent:
        "<strong>ТехноСтальИнжиниринг</strong><br>г. Минск, ул. Судмалиса, 20",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./images/logo_final.png", 
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  );

  map.geoObjects.add(customPlacemark);
});
