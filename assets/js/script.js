const toggleNav = () => {
    const mobNav = document.getElementById("mobileNav");
  
    if (mobNav.classList.contains("show")) {
      
      gsap.to(mobNav, {
        x: "100%",         
        opacity: 0,        
        duration: 0.5,    
        ease: "power2.out",
        onComplete: () => {
          mobNav.classList.remove("show");
        }
      });
    } else {
     
      mobNav.classList.add("show");
      gsap.fromTo(
        mobNav,
        { x: "100%", opacity: 0 },   
        {
          x: "0%",                 
          opacity: 1,             
          duration: 0.5,
          ease: "power2.out"
        }
      );
    }
  };
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smooth: true,
    smoothTouch: false,
});


function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


gsap.registerPlugin(ScrollTrigger);


const heading = document.querySelector("#home h1");
const paragraph = document.querySelector("#home p");

heading.innerHTML = heading.textContent
    .split(" ")
    .filter(word => word.trim().length > 0) 
    .map((word) => {
        return `<span class="word">${[...word].map(letter => `<span>${letter}</span>`).join("")}</span>`;
    })
    .join(" "); 


const tl = gsap.timeline();

tl.from("#home h1 span", {
    opacity: 0,
    stagger: 0.05, 
    ease: "power2.out",
    duration: 1.2,
});


tl.from(paragraph, {
    opacity: 0,
    y: 30,
    ease: "power2.out",
    duration: 1,
});


const sections = ["about", "gallery", "features", "layout", "videos"];

sections.forEach((section) => {
    gsap.from(`#${section}`, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: `#${section}`,
            start: "top 80%", 
            once: true, 
        },
    });
});


const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1260: { slidesPerView: 3 },
    },
    on: {
        init: function () {
            if (this.isBeginning) {
                document.querySelector(".button-prev").style.borderColor = "#E7ECF2";
            }
        },
        reachBeginning: function () {
            document.querySelector(".button-prev").style.borderColor = "#E7ECF2";
        },
        reachEnd: function () {
            document.querySelector(".button-next").style.borderColor = "#E7ECF2";
        },
        fromEdge: function () {
            document.querySelector(".button-prev").style.borderColor = "";
            document.querySelector(".button-next").style.borderColor = "";
        },
    },
});
