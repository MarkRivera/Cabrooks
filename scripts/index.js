document.addEventListener("DOMContentLoaded", function (event) {
  Barba.Pjax.start();

  /*Check if landing page was loaded first,
  if so, then use the barba event listener.
  Otherwise, use native event listener.
  */

  if (window.location.pathname === '/') {
    Barba.Dispatcher.on('newPageReady', function () {
      let nav = document.getElementById("myTopnav");
      nav.addEventListener('click', function () {
        (nav.className === "topnav topnav-1a") ? nav.className += " responsive": nav.className = "topnav topnav-1a";
      })
      initSlideShow();
    })
  }
  else {
    let nav = document.getElementById("myTopnav");
    nav.addEventListener('click', function () {
      (nav.className === "topnav topnav-1a") ? nav.className += " responsive": nav.className = "topnav topnav-1a";
    })
    initSlideShow ()
  }

  /* Slide show JS */

  function initSlideShow () {
    const el = document.querySelector('.siema');
    const slideShow = new Siema({
      selector: el,
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    });
    const prev = document.querySelector('.prev').addEventListener('click', () => slideShow.prev())
    const next = document.querySelector('.next').addEventListener('click', () => slideShow.next())
  };

})
