var tl = gsap.timeline()
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[#main]'),
//     smooth: true
// });

tl.to("#page1",{
    y:"100vh",
    scale:"0.6",
    duration:0,
    delay:0
})

tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:0.5

}) 

tl.to("#page1",{
    y:" 0vh",
    rotate:360,
    scale:1
})