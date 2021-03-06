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
        (nav.className === "topnav cl-effect-21") ? nav.className += " responsive": nav.className = "topnav cl-effect-21";
      })
      initSlideShow();
      initModal();
    })
  }
  else {
    let nav = document.getElementById("myTopnav");
    nav.addEventListener('click', function () {
      (nav.className === "topnav cl-effect-21") ? nav.className += " responsive": nav.className = "topnav cl-effect-21";
    })
    initSlideShow();
    initModal();

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


  function initModal () {
    let galleryModal = document.getElementById('modal-content');
    let doesModalGalleryExist = false;
    let modalGallery;
    let isOpen;

    function makeImgOpenModal () {
      const images = document.getElementById('pics');
      images.addEventListener('click', (e) => {
        if (e.target.nodeName == 'IMG') {
          openModal(e.target.dataset.index)
        }
      })
    }

    function openModal (index) {
      document.getElementById('gallery-modal').style.display = 'block';
      isOpen = true;

      if (doesModalGalleryExist) {
        modalGallery.goTo(index)
      }

      else {
        doesModalGalleryExist = true;
        modalGallery = new Siema({
          selector: galleryModal,
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

        modalGallery.goTo(index)
      }
    }

    function closeModal() {
      document.getElementById('gallery-modal').style.display = "none";
      isOpen = false;
    }

    makeImgOpenModal();
    document.querySelector('.close').addEventListener('click', () => {
      closeModal();
    })

    document.addEventListener('keydown', (e) => {
      if (isOpen && e.key === "Escape") {
        closeModal();
      }
    })


  }
})
