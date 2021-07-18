const galleryItems = [
    {
    preview:
      './images/img/МстителиХалк340.jpg',
    original:
      './images/img/МтителиХалк1920х1080.jpg',
    description: 'Мстители Халк',
  },
  {
    preview:
      './images/img/Тор340jpg.jpg',
    original:
      './images/img/Тор1920х1080.jpg',
    description: 'Тор',
  },
  {
    preview:
      './images/img/КапатанМарвел340.jpg',
    original:
      './images/img/КапатанМарвел1920х1080.jpg',
    description: 'Капатан Марвел',
  },
 
  {
    preview:
      './images/img/МстителиТанос340.jpg',
    original:
      './images/img/МстителиТанос1920х1080.jpg',
    description: 'Мстители и Танос',
  },
  {
    preview:
      './images/img/ДокторСтрендж340.jpg',
    original:
      './images/img/ДокторСтрендж1920х1080.jpg',
    description: 'Доктор Стрендж',
  },
 {
    preview:
      './images/img/Танос340.jpg',
    original:
      './images/img/Танос1920х1080.jpg',
    description: 'Танос',
  },
   {
    preview:
      './images/img/МстителиКапитанАм340.jpg',
    original:
      './images/img/МстителиКапитанАм1920х1080.jpg',
    description: 'Капитан Америка',
  },
  {
    preview:
      './images/img/ТонниСтарк340.jpg',
    original:
      './images/img/ТонниСтарк1920х1080.jpg',
    description: 'Тонни Старк',
  },
 
  {
    preview: "./images/img/Грут340.jpg",
    
    original:
      './images/img/Грут1920х1080.jpg',
    description: 'Мстители Грут',
  },
];

const galleryList = document.querySelector('.gallery');
const modalOpen = document.querySelector('.js-lightbox');
const modalBd = document.querySelector('.lightbox__overlay');
const modalImg = document.querySelector('.lightbox__image');
const modalClose = document.querySelector('.lightbox__button');
let modalOpenImg;

const gallerLiImg = galleryItems.map(({preview, original, description}) =>
  `<li class="gallery__item">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      data-source="${original}"
    />
</li>`
);

galleryList.insertAdjacentHTML('afterbegin', gallerLiImg.join(` `));
galleryList.addEventListener(`click`, openMobalBd);
modalBd.addEventListener(`click`, closeMobalBd);
modalClose.addEventListener(`click`, deleteClassIsOpen);


function openMobalBd(e) {
  if (e.target.nodeName !== "IMG") return;
  modalOpenImg = e.target;
  const urlOriginalImg = e.target.dataset.source;
  const altImg = e.target.alt;
  
  window.addEventListener(`keydown`, onEscAndArrowKeyPress);

  modalOpen.classList.add(`is-open`);
  modalImg.src = urlOriginalImg;
  modalImg.alt = altImg;
}

function closeMobalBd(e) {
  if (e.currentTarget === e.target) {
    deleteClassIsOpen();
  }
};

function deleteClassIsOpen() {
  window.removeEventListener(`keydown`, onEscAndArrowKeyPress);
  modalOpen.classList.remove(`is-open`);
  modalImg.src = " ";
}

function cuurentImgModalLeft() {
  const liParent = modalOpenImg.parentNode;
  let liLeftmg;
  if (liParent.previousElementSibling!== null) {
    liLeftmg = liParent.previousElementSibling;
  } else {
    liLeftmg = galleryList.lastElementChild;
  }

  const imgLeft = liLeftmg.firstElementChild;
  const imgLeftOriginal = imgLeft.dataset.source;
  const imgLeftalt = imgLeft.alt;

  modalImg.src = imgLeftOriginal;
  modalImg.alt = imgLeftalt;

  modalOpenImg = imgLeft;
  if (liLeftmg.firstElementChild === null) {
    imgLeft = galleryList.firstElementChild;
  }
  }

function cuurentImgModalRight() {
  const liParent = modalOpenImg.parentNode;
  let liRightimg;
  if (liParent.nextElementSibling!== null) {
    liRightimg = liParent.nextElementSibling;
  } else {
    liRightimg = galleryList.firstElementChild;
  }
  const imgRight = liRightimg.firstElementChild;
  const imgRightOriginal = imgRight.dataset.source;
  const imgRightalt = imgRightOriginal.alt;

  modalImg.src = imgRightOriginal;
  modalImg.alt = imgRightalt;

  modalOpenImg = imgRight;
  }


function onEscAndArrowKeyPress(e) {
  
  if (e.code === `Escape`) {
    deleteClassIsOpen();
  };

  if (e.code === `ArrowLeft`) {
    cuurentImgModalLeft();
  };
  
  if (e.code === `ArrowRight`) {
    cuurentImgModalRight();
  }
}
