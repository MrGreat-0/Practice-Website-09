const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

scroll.stop();

var tl = gsap.timeline({
    onComplete: function () {
        scroll.start();
    }
});

if (window.innerWidth > 1000) {

    tl.to("#main", {
        y: "100vh",
        scale: 0.40,
        duration: 0
    })

    tl.to("#main", {
        y: "-262vh",
        duration: 1.1,
        delay: 0
    })

    tl.to("#main", {
        y: "0vh",
        rotate: -360,
        scale: 1,
        delay: 1.3,
        duration: 1.8
    })

}