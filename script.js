const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#main", {
    y: "100vh",
    scale: 0.45,
    duration: 0
})

tl.to("#main", {
    y: "-215vh",
    duration: 1.5,
    delay: 0.7
})

tl.to("#main", {
    y: "0vh",
    rotate: -360,
    scale: 1,
    delay: 0.5,
    duration: 1.5
})
