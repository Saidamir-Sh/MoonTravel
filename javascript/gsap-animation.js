
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline()
tl.from(".card-1", {
    x: -600,
    opacity: 1,
    duration: 3,
    scrollTrigger: {
        trigger: ".content__box",
        start: "top 50%",
        end: "bottom 10%",
        scrub: true,
        toggleAction: "restart, none, none, none"
    }
})
.from(".card-2", {
    x: 600,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".card-2",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
        toggleAction: "restart none none none"
    }
})

.from(".card-3", {
    x: -700,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".content__box",
        start: "top 10%",
        scrub: true,
        toggleAction: "restart none none none"
    }
})