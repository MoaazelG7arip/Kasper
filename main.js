
let image = document.querySelector('.services .section-2 .image');
let progress = document.querySelectorAll('.three .progress')

document.querySelectorAll(".about .two .card h1").forEach((h1, i) => {
  ScrollTrigger.create({
    trigger: h1,
    start: "top 70%",
    onEnter: () => {
      if (h1.innerHTML == 0) {
        let timer = setInterval(() => {
          h1.innerHTML = +h1.innerHTML + 1;
          if (i == 0) {
            if (h1.innerHTML == 1263) {
              clearInterval(timer);
            }
          } else if (i == 1) {
            if (h1.innerHTML == 256) {
              clearInterval(timer);
            }
          } else if (i == 2) {
            if (h1.innerHTML == 1743) {
              clearInterval(timer);
            }
          } else if (i == 3) {
            if (h1.innerHTML == 17) {
              clearInterval(timer);
            }
          }
        }, 1);
      }
    },
  });
});

document.querySelectorAll('.services .section-1 .cards .card').forEach((card, i)=>{
    gsap.set(card, {
        opacity: 0
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: card.parentNode,
            start: "top 70%",
        }
    });
    tl.to(card, {
        opacity: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
    },delay = i/2)
})

document.querySelectorAll('.services .section-2 ul li').forEach((li)=>{
    gsap.set(li, {
        xPercent: 100,
        opacity: 0
    });
    gsap.to(li, {
        scrollTrigger: {
            trigger: li,
            start: "top 70%",
        },
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'easeInOut',

    });
})



gsap.fromTo(
   image,
     {
        xPercent: -100,
        opacity: 0
     },
     {
        scrollTrigger:{
            trigger: image,
            start: "top 80%",
        },
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'elastic.out',
        delay: 1,
     }
);


gsap.to(progress, {
    scrollTrigger: {
        trigger: progress,
        start: "top center",
    },
    className: 'progress active',
});

