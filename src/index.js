import ScrollMagic from 'scrollmagic';

const controller = new ScrollMagic.Controller();


const scene = new ScrollMagic.Scene({
    triggerElement: '.trigger-element',
    triggerHook: 0.7,
})
    .on('enter', function () {
        document.querySelector('.animated-element').classList.add('animate');
    })
    .addTo(controller);
const scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger-element1',
    triggerHook: 0.7,
})
    .on('enter', function () {
        document.querySelector('.animated-element1').classList.add('animate1');
    })
    .addTo(controller);
const scene2 = new ScrollMagic.Scene({
    triggerElement: '.trigger-element2',
    triggerHook: 0.7,
}).on('enter', function () {
    document.querySelector('.animated-element2').classList.add('animate2');
}).addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.trigger-element3',
    triggerHook: 0.7,
}).on('enter', function () {
    document.querySelector('.animated-element3').classList.add('animate3');
}).addTo(controller);

