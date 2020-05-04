const navToggle = document.querySelector('#menu-toggle');
const slide1 = document.querySelector('#slide-1');
const slide2 = document.querySelector('#slide-2');
const slide3 = document.querySelector('#slide-3');

const background = document.querySelector('#slide-background');
const leftImage = document.querySelector('.slide__image-left');
const rightImage = document.querySelector('.slide__image-right');

slide1.addEventListener('click', () => {
  background.setAttribute('fill', 'url(#bg1)');
  leftImage.setAttribute('fill', 'url(#pattern1l)');
  rightImage.setAttribute('fill', 'url(#pattern1r)');
  const tl1 = slidesTl();
  tl1.play();
});

slide2.addEventListener('click', () => {
  background.setAttribute('fill', 'url(#bg2)');
  leftImage.setAttribute('fill', 'url(#pattern2l)');
  rightImage.setAttribute('fill', 'url(#pattern2r)');
  const tl2 = slidesTl();
  tl2.play();
});

slide3.addEventListener('click', () => {
  background.setAttribute('fill', 'url(#bg3)');
  leftImage.setAttribute('fill', 'url(#pattern3l)');
  rightImage.setAttribute('fill', 'url(#pattern3r)');
  const tl3 = slidesTl();
  tl3.play();
});

const slidesTl = () => {
  let tl = gsap.timeline({ paused: true })
    .to(leftImage, { y: -80, opacity: 0, duration: 1 })
    .to(rightImage, { y: 80, opacity: 0, duration: 1 }, "<")
    .to(leftImage, { y: -20, opacity: 1, duration: 0.5 })
    .to(rightImage, { y: 20, opacity: 1, duration: 0.5 }, "<")
    .fromTo(background, { opacity: 0 }, { opacity: 1, duration: 1 }, "<");
  return tl.timeScale(2);
};

navToggle.addEventListener('click', navigationToggle);

const toggleTl = () => {
  let tl = gsap.timeline({ paused: true });
  tl.to('#menu-toggle', { duration: 0.2, x: 200 })
    .fromTo('#menu', { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.2 }, "<");
  return tl.timeScale(0.3);
};

const toggleTlControls = toggleTl();

function navigationToggle() {
  navToggle.classList.contains('play') ? navToggle.classList.remove('play') : navToggle.classList.add('play');

  toggleTlControls.progress() === 1 ? toggleTlControls.reverse() : toggleTlControls.play();

}

const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#modal-close-button');
const modalImage = document.querySelector('#modal-image');
const slides = {
  pattern1l: "./assets/macro-2.jpg",
  pattern1r: "./assets/macro-3.jpg",
  pattern2l: "./assets/macro-4.jpg",
  pattern2r: "./assets/macro-5.jpg",
  pattern3l: "./assets/impala_2.jpg",
  pattern3r: "./assets/impala_3.jpg",
};

function openModal(slide) {
  modalImage.src = slides[slide];
  gsap.to(modal, { opacity: 1, duration: 1 });
  modal.classList.add('show-modal');
}

leftImage.addEventListener('click', () => {
  let slide = leftImage.getAttribute('fill').substring(5, 14);
  openModal(slide);
});

rightImage.addEventListener('click', () => {
  let slide = rightImage.getAttribute('fill').substring(5, 14);
  openModal(slide);
});

closeModal.addEventListener('click', () => {
  if (modal.classList.contains('show-modal')) {
    gsap.to(modal, { opacity: 0, duration: 0.5 });
    modal.classList.remove('show-modal');
  };
});
