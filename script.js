
document.addEventListener("DOMContentLoaded", function() {
  const laptopHeroSection = document.querySelector('.laptop-scroll-hero');
  if (!laptopHeroSection) return;
  
  const row1 = laptopHeroSection.querySelector('#scroll-row-1');
  const row2 = laptopHeroSection.querySelector('#scroll-row-2');
  
  if (!row1 || !row2) return;
  
  // Get card width + gap for smooth looping - updated for new card size
  const cardWidth = 165 + 30;
  const totalWidth = cardWidth * 3;
  
  // Animate first row left to right
  gsap.set(row1, { x: -totalWidth });
  const row1Tween = gsap.to(row1, {
    x: 0,
    duration: 20,
    ease: "linear",
    repeat: -1,
    paused: false
  });
  
  // Animate second row right to left  
  gsap.set(row2, { x: 0 });
  const row2Tween = gsap.to(row2, {
    x: -totalWidth,
    duration: 25,
    ease: "linear", 
    repeat: -1,
    paused: false
  });
  
  // Add floating animation only to cards within our specific container
  const cards = laptopHeroSection.querySelectorAll('.laptop-card');
  cards.forEach((card, index) => {
    gsap.to(card, {
      y: Math.sin(index) * 3,
      duration: 3 + (index % 3) * 0.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: index * 0.2
    });
  });
  
  // Pause only these specific animations on hover
  laptopHeroSection.addEventListener('mouseenter', () => {
    row1Tween.pause();
    row2Tween.pause();
  });
  laptopHeroSection.addEventListener('mouseleave', () => {
    row1Tween.resume();
    row2Tween.resume();
  });
});
