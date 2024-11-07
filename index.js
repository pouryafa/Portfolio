
$(document).ready(function() {
    $(".Portrait").css({
        "opacity": "0",
        "transform": "translate3d(0, 15px, 0) scale3d(1.07, 1.07, 1)", // Start from a different position, scale, and rotation
        "transform-style": "preserve-3d"
    });

    $(".Portrait").animate({ opacity: 1 }, {
        duration: 1000, // Animation duration in milliseconds (1 second)
        step: function(now, fx) {
            let scaleValue = 1.07 - now * 0.07; // Scale from 1.5 to 1
            let translateY = 15 - now * 15; // Move from -200px to 0px
            

            $(this).css("transform", `translate3d(0, ${translateY}px, 0) scale3d(${scaleValue}, ${scaleValue}, 1`);
        }
    });
});

$(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate elements in view
    function checkScrollAnimation() {
        $(".slide-up").each(function(index) {
            if (isElementInViewport(this)) {
                // Add active class with a delay based on the index
                $(this).delay(index * 300).queue(function(next) {
                    $(this).addClass("active");
                    next();
                });
            }
        });
    }

    // Trigger animation on scroll
    $(window).on("scroll", function() {
        checkScrollAnimation();
    });

    // Trigger on page load (for elements already in view)
    checkScrollAnimation();
});




document.addEventListener("DOMContentLoaded", function () {
    const faqAccordions = document.querySelectorAll('.faq-accordion');

    faqAccordions.forEach(accordion => {
        const question = accordion.querySelector('.faq-question');
        const answer = accordion.querySelector('.faq-answer');
        const icon = accordion.querySelector('.faq-icon svg');

        question.addEventListener('click', () => {
            // Toggle the answer visibility
            const isExpanded = answer.style.height !== '0px';

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.height = '0px';
            });
            
            // Reset all icons to plus
            document.querySelectorAll('.faq-icon svg').forEach(ic => {
                ic.classList.remove('bi-dash-lg');
                ic.classList.add('bi-plus-lg');
            });

            // Toggle the clicked question's answer and icon
            if (!isExpanded) {
                answer.style.height = `${answer.scrollHeight}px`;
                icon.classList.remove('bi-plus-lg');
                icon.classList.add('bi-dash-lg');
            } else {
                answer.style.height = '0px';
                icon.classList.remove('bi-dash-lg');
                icon.classList.add('bi-plus-lg');
            }
        });
    });
});

// modern text
gsap.registerPlugin(ScrollTrigger)

const splitType = document.querySelectorAll(".reveal-type");
splitType.forEach((char,i)=> {
const text = new SplitType(char, {types:"chars"})
        gsap.from(text.chars, {
            scrollTrigger:{
                trigger: char,
                
                
                scrub:false,
                markers:false,
            },
            opacity:0.2,
            stagger:0.1,
        })

})
// Select all elements with the `fadeup` attribute
const fadeupElements = document.querySelectorAll("[fadeup]");

// Loop through each element and set up an individual ScrollTrigger
fadeupElements.forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,            
      toggleActions: "resume none none none", 
      scrub: false,               
      start: "top 80%",           
      markers: true,               
    },
    y: 0,
    duration: 2,
    opacity: 1,
    autoAlpha: 1,
  });
});



gsap.set('.btt', {
    yPercent: -200,
})
const tl = gsap.timeline({
    scrollTrigger : {
        start : 'top+=200',
        end : '+=1',
        toggleActions: 'play none none reverse',
        scrub: 2,
    }
})
tl

.to('.btt', {
    yPercent: 0,
})
.to('.ctah', {
    x: -50,
    
},"<")

const logo = gsap.timeline({
    scrollTrigger : {
        start : 'top+=200',
        end : '+=1',
        toggleActions: 'play none none reverse',
        scrub: 2,
    }
})
logo.to('.navbar-left', {
  opacity:0,
})

$('.btt').on('click', function(event) {
    event.stopPropagation(); // Prevent other events from interfering
    $('html, body').animate(
        { scrollTop: 0 }, 
        2000, 
        'swing'
    );
});


const myText = new SplitType('#my-text');

gsap.to('.word', {
    y: 0,
    stagger: 0.07,
    delay: 0.2,
    duration: 0.1,
});




gsap.to(".expand-section", {
    opacity: 1,
    y: 10,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3, // Adds delay between each section animation
    scrollTrigger: {
        trigger: ".expand-section",
        start: "top 80%", // Adjust to when the animation should start
        toggleActions: "play none none none",
    }
});

const element = document.querySelector(".ctah");
element.addEventListener("mouseenter", () => {
    gsap.to(".ctah", {
        backgroundColor: '#1E3E62',
        duration: 0.2,
        ease: "power2.out"
    })

        element.addEventListener("mouseleave", () => {
            gsap.to(".ctah", { backgroundColor: "transparent",
            duration: 0.2,
            ease: "power2.out"
             }); 
          });
        
})
const icon = document.querySelector(".cta-icon");
element.addEventListener("mouseenter", () => {
    gsap.to(".cta-icon", {
        x: 80,
        duration: 0.3, 
        ease: "power2.out",
        

    })
    element.addEventListener("mouseleave", () => {
        gsap.to(".cta-icon", {
            x: 0,
            duration: 0.3, 
        ease: "power2.out",
            
        })
    })
});
const text = document.querySelector(".cta-text");
element.addEventListener("mouseenter", () => {
    gsap.to(".cta-text", {
        x: -40,
        duration: 0.3, 
        ease: "power2.out",
        color:'#000',
    })
    element.addEventListener("mouseleave", () => {
        gsap.to(".cta-text", {
            x: 0,
            duration: 0.3, 
            ease: "power2.out",
            color:'#fff',
            

        })
        
    })
})

const maincards = document.querySelectorAll(".home-card-ex");
const cardwrappers = document.querySelectorAll(".card-wrapper");
const carditems = document.querySelectorAll(".home-card-ex-items");
const opencards = document.querySelectorAll(".open-card-button");
const textcolors = document.querySelectorAll(".text-color");
const cardcontents = document.querySelectorAll(".card-content");


carditems.forEach((carditem, index) => {
    const cardwrapper = cardwrappers[index];
    const opencard = opencards[index];
    const textcolor = textcolors[index];
    const cardcontent = cardcontents[index];

carditem.addEventListener("mouseenter", () => {
    gsap.to(cardwrapper, {
        borderRadius:'2rem',
        width: '25rem',
        height:'32rem',
        
        
    })
    gsap.to(opencard, {
    left: '100%',
    translate: 'none',
    rotate: 'none',
    scale: 'none',
    transform: 'translate(-100px, 0px)',
    })
    gsap.to(textcolor, {
        opacity:0,
    })
    gsap.to(cardcontent, {
        opacity:1,
        
    })
    
    carditem.addEventListener("mouseleave", () => {
        gsap.to(cardwrapper, {

        width: '20rem',
        borderRadius: '2.78rem',
        height: '4.72rem',
        
        })
        gsap.to(opencard, {
            left: '1.6511%',
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, 0px)',
            })
            gsap.to(textcolor, {
                opacity:1,
            })
            gsap.to(cardcontent, {
                opacity:0,
            })
    })
})
})





const targets = document.querySelectorAll(".home-card-ex-items");


targets.forEach((target) => {
  target.addEventListener("mouseenter", () => {
    target.classList.add("z-index-2"); 

  target.addEventListener("mouseleave", () => {
    target.classList.remove("z-index-2"); 
  });
});
})

const faqAccordions = document.querySelectorAll(".faq-accordion");

faqAccordions.forEach((accordion) => {
    const faqbackground = accordion.querySelectorAll(".gradient-bg-faq");
    
    accordion.addEventListener("mouseenter", () => {
        gsap.to(faqbackground, {
            x: '0%',        
            y: '0px',       
            scale: 1,       
            rotateX: 0,     
            rotateY: 0,     
            rotateZ: 0,    
            skewX: 0,      
            skewY: 0,       
            opacity: 1,    
            duration: 0.5  
        });
    });

    accordion.addEventListener("mouseleave", () => {
        gsap.to(faqbackground, {
            x: '100%',
            opacity: 0,
            duration: 0.5
        });
    });
});

// Select all elements with the specified class
const elements = document.querySelectorAll(".home-card-ex-items");

// Set up mouse move and leave events for each element
elements.forEach((element) => {
  // Add mousemove event listener
  document.addEventListener("mousemove", (e) => {
    // Calculate translateX and translateY based on mouse position
    const translateX = (e.clientX - window.innerWidth / 2) / 20;
    const translateY = (e.clientY - window.innerHeight / 2) / 20;

    // Use GSAP to animate only the X and Y translation
    gsap.to(element, {
      x: translateX,
      y: translateY,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  // Reset translation on mouse leave
  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});

const cvbuttons = document.querySelectorAll(".cv-button");

cvbuttons.forEach((cvbutton) => {
    const cvbuttonbg = cvbutton.querySelector(".rounded-btn-background");
    const bticon = cvbutton.querySelector(".bt-icon");

    cvbutton.addEventListener("mouseenter", () => {
        gsap.to(cvbuttonbg, {
            scale: 2,          
            duration: 0.2,   
            ease: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        });
    });

    cvbutton.addEventListener("mouseleave", () => {
        gsap.to(cvbuttonbg, {
                     
            scale: 0,         
            duration: 0.2,
            ease: "cubic-bezier(0.165, 0.84, 0.44, 1)"
        });
    });

    cvbutton.addEventListener("mouseenter", () => {
        gsap.to(bticon, {
            filter: "brightness(0) invert(1)", // Example to invert color
            duration: 0.2,
            ease: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        })
    })
});

const mobileMenu = document.querySelector("nav ul");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");


menuOpen.addEventListener("click", () => {
   mobileMenu.classList.add("open")
    })
    menuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("open")
    })







