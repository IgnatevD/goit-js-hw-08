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

const modalImg = document.querySelector('.lightbox__image');
console.log(modalImg.src);


const modalClose = document.querySelector('.lightbox__button');


const gallerLiImg = galleryItems.map(item =>
  `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
);




galleryList.insertAdjacentHTML('afterbegin', gallerLiImg.join(` `));

galleryList.addEventListener(`click`, onIn => {
  modalOpen.classList.add(`is-open`);
  // modalImg.src = `${item.original}`;

});



modalOpen.addEventListener(`click`, closeMobalBd);

modalClose.addEventListener(`click`, onIn => modalOpen.classList.remove(`is-open`));




function closeMobalBd(e) {
  if (e.currentTarget === e.target)
  modalOpen.classList.remove(`is-open`)
};