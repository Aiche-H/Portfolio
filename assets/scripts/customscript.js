AOS.init({
    delay: 100, // delay in milliseconds
    offset: 150, // offset in pixels
    duration: 1000, // duration in milliseconds
  });

  $(document).ready(function(){
    $(' .sidenav').sidenav();
    $(' .parallax').parallax();
});

function downloadFile(filename) {
  let link = document.createElement('a');
  link.href = '../CV/Henrikki_CV.pdf' + filename;
  link.download = filename;
  link.click();
}

const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', () => {
  const startTime = performance.now();
  const duration = 2000; // 2 seconds
  const scrollHeight = window.scrollY;

  function animateScroll() {
    const currentTime = performance.now();
    const progress = (currentTime - startTime) / duration;
    const newScrollTop = scrollHeight * (1 - progress);

    window.scrollTo(0, newScrollTop);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  animateScroll();
});