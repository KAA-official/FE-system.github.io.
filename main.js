const MENU_LINKS = document.querySelectorAll('.header__menu-link');

MENU_LINKS.forEach(link => link.addEventListener('click', event =>{
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));


//______HERO______

const HERO_DOTS = document.querySelectorAll('.hero__dot');
const HERO_IMAGE = document.querySelector('.hero__image');
const HERO_TITLE = document.querySelector('.hero__title');
const HERO_SUBTITLE = document.querySelector('.hero__subtitle');

const HERO_TITLES = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
];

const HERO_SUBTITLES = [
    'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
];

const HERO_IMAGES = [
    'https://im.wampi.ru/2023/02/08/hero_1.jpg' ,
    'https://ic.wampi.ru/2023/02/08/hero_2.jpg' ,
    'https://ic.wampi.ru/2023/02/08/hero_3.jpg'
];

HERO_DOTS.forEach((dot, index) => dot.addEventListener('click', event => {
    HERO_DOTS.forEach(el => {
        el.classList.remove('active');
    });

    dot.classList.add('active');

    HERO_IMAGE.src = HERO_IMAGES[index];  //меняем картинку
    HERO_TITLE.textContent = HERO_TITLES[index]; //меняем заголовок, достаем нужный из массива
    HERO_SUBTITLE.textContent = HERO_SUBTITLES[index]; //меняем текст
}));



//______FEATURES1______

const FEATURES1_DOTS = document.querySelectorAll('.features1__dot');
const FEATURES1_ITEM = document.querySelector('.features1__item');

const FEATURES1_ITEMS = [
    'Создаем кастомизированные программы и сервисы для развития управленческих команд в российских и международных компаниях' ,
    'Помогаем руководителям и командам колл-центров создать полный цикл по поддержке клиентов и организовать контроль качества' ,
    'Разрабатываем локальные защищенные корпоративные хранилища, а также осуществляем поддержку на протяжении всего времени пользования'
];

FEATURES1_DOTS.forEach((dot, index) => dot.addEventListener('click', event => {
    FEATURES1_DOTS.forEach(el => {
        el.classList.remove('active');
    });

    dot.classList.add('active');

    FEATURES1_ITEM.textContent = FEATURES1_ITEMS[index]; //меняем текст
}));


//______FEATURES2______

const FEATURES2_NAVS = document.querySelectorAll('.features2__nav-item');
const FEATURES2_TABS = document.querySelectorAll('.features2__item');

FEATURES2_NAVS.forEach((dot, index) => dot.addEventListener('click', event => {
    FEATURES2_NAVS.forEach(el => {
        el.classList.remove('active');
    });

    FEATURES2_TABS.forEach(el => {
        el.classList.remove('active');
    });

    dot.classList.add('active');
    FEATURES2_TABS[index].classList.add('active');
}));