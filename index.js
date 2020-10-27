document.addEventListener("DOMContentLoaded", function(){
    
    new CircleType(document.getElementById('coming'))
    .radius(300)

    new CircleType(document.getElementById('soon'))
        .dir(-1)
        .radius(300)

    gsap.to('#heroLogo', { width: '50%', rotation: 720, duration: .75 })
    gsap.to('#outerCircleBorder', { rotation: 360, duration: 30, repeat: -1, ease: 'linear' })
    gsap.to('#innerCircleBorder', { rotation: -360, duration: 50, repeat: -1, ease: 'linear'})
    gsap.to('#coming', {opacity: 1, delay: 1})
    gsap.to('#soon', {opacity: 1, delay: 1})
});

