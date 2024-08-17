let navBar = document.querySelector('.navbar'); 
let menuBtn = document.querySelector('#menuBtn'); 

menuBtn. onclick = () => {
	navBar.classList.toggle('active');
}

/* == Number section start ==*/
 document.addEventListener('DOMContentLoaded', () => { /*code runs only after the document is fully ready.*/
    let valueDisplays = document.querySelectorAll('.num'); /*selects all elements with the class .num.*/
    let interval = 1000; /*total duration =  1second*/

    valueDisplays.forEach(valueDisplay => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-value"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(() => {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
});

 
 /* == Scroll section active ==*/
 let sections = document.querySelectorAll('section');
 
 window.onscroll = () => {
	 let header = document.querySelector('header');
	 header.classList.toggle('sticky', windowscroll)
 }

/* == SLIDING IMAGES ==*/
 document.addEventListener('DOMContentLoaded', function () {
            const images = document.querySelectorAll('.popup-images img');
            const dots = document.querySelectorAll('.navigation-dot');
            let currentImageIndex = 0;

            function showNextImage() {
                images[currentImageIndex].classList.remove('active');
                dots[currentImageIndex].classList.remove('active');
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].classList.add('active');
                dots[currentImageIndex].classList.add('active');
                setTimeout(showNextImage, 2000);
            }

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    images[currentImageIndex].classList.remove('active');
                    dots[currentImageIndex].classList.remove('active');
                    currentImageIndex = index;
                    images[currentImageIndex].classList.add('active');
                    dots[currentImageIndex].classList.add('active');
                });
            });

            showNextImage();
        });
/* ==  JavaScript to handle the click event == */
 window.addEventListener('load', function() {
            const hash = window.location.hash;
            if (hash) {
                const target = document.querySelector(hash); /*selects the element with the ID that matches the hash #section1 */
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
		

