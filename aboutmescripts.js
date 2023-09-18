function showimg() {
  document.getElementById('imagepng').classList.toggle('hidden');
}

var windowScrolled;

window.addEventListener('scroll', function windowScroll() {
  windowScrolled = window.page;
  document.getElementById('ParallaxContent').style.transform =
    'translate3d(0, ' + windowScrolled / 2 + 'px, 0)';
});

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function () {
  // Select the slide-in content element
  const slideInContent = document.querySelector('.slide-in-content');

  // Check if ScrollTrigger plugin is available
  if (
    typeof gsap !== 'undefined' &&
    typeof gsap.utils.toArray === 'function' &&
    typeof ScrollTrigger !== 'undefined'
  ) {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create a gsap timeline
    const tl = gsap.timeline();
    const tln = gsap.timeline();

    // Add animation to the timeline
    tl.to(slideInContent, { opacity: 1, x: 0, duration: 0.5 });

    // Create a ScrollTrigger
    ScrollTrigger.create({
      animation: tl,
      trigger: slideInContent,
      start: 'top 70%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
      // markers:true,
    });

    gsap.to('.heading1', {
      scale: 1.2,
      scrollTrigger: {
        trigger: '.heading1',
        start: 'top+=4em 60%',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
        //  markers:true,
      },
    });

    gsap.to('.head2', {
      scale: 1.2,
      scrollTrigger: {
        trigger: '.contactcards',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
        //  markers:true,
      },
    });
    gsap.to('#projecthead', {
      scale: 1.2,
      scrollTrigger: {
        // markers: true,
        trigger: '#projecthead',
        start: 'top+=4em 60%',
        end: 'bottom center-=100',
        toggleActions: 'play reverse play reverse',
        //  markers:true,
      },
    });

    const elements = gsap.utils.toArray('.slide-in-content > p');

    elements.forEach((i) => {
      gsap.to(i, {
        scale: 1.03,

        scrollTrigger: {
          trigger: i,
          start: 'top 60%',
          end: 'center 40%',
          toggleActions: 'play reverse play reverse',
        },
      });
    });

    gsap.from('#footer', {
      x: '-100%',
      scrollTrigger: {
        trigger: '#footer',
        start: 'top 100%',
        end: 'bottom 100%',
        scrub: true,
      },
      // onComplete: () => {
      //   console.log('yes');
      // },
    });

    var projectelement = gsap.utils.toArray('#items');

    gsap.fromTo(
      projectelement,
      {
        rotationY: '-60deg',
      },
      {
        rotationY: '0deg',
        scrollTrigger: {
          trigger: '#items',
          start: 'top 60%',
          end: 'center 40%',
          toggleActions: 'play none play reverse',
        },
      }
    );

    var menu = document.querySelector('#menu');

    gsap.to(menu, {
      scrollTrigger: {
        trigger: menu,
        start: 'top top',
        end: 'bottom bottom',
        // markers:true,
        pin: true,
        onEnter: () => {
          console.log('Yes');
          gsap.set(menu, { position: 'fixed' });
        },
      },
    });
  } else {
    console.error(
      'ScrollTrigger plugin not found. Make sure it is properly loaded.'
    );
  }
});
