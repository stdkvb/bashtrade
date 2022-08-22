let burger = document.querySelector('.burger');
let dropdown = document.querySelector('.dropdown');
burger.addEventListener('click', function () {
    this.classList.toggle('active')
    document.querySelector('.nav').classList.toggle('active');
    if (window.screen.width < 1025) {
        document.querySelector('body').classList.toggle('no-scroll')
        dropdown.classList.remove('active')
    }
})
let headerHeight = document.querySelector('header').clientHeight;
if (window.screen.width < 1025) {
    let navTop = document.querySelector('.nav');
    navTop.style.top = headerHeight + 'px';
}

if (window.screen.width < 1025) {
    let headerBtn = document.querySelector('.header-order-button');
    let headerNav = document.querySelector('.nav');

    let dropdownButton = document.querySelector('.dropdown img');

    let dropdownUl = document.querySelector('.dropdown ul').clientHeight;
    let flag = true;
    let headerContent = document.querySelector('.header-content');
    let headerNav2 = document.querySelector('nav');
    headerNav2.appendChild(headerBtn)
    dropdownButton.addEventListener('click', function () {
        dropdown.classList.toggle('active')
    })
}

let showBtn = document.querySelector('.showbtn')
if (showBtn) {
    showBtn.addEventListener('click', function () {
        document.querySelector('.dynamic-text').classList.add('active')
    })

}

let teamSwiper = new Swiper('.js-team-slider', {
    slidesPerView: 1,
    slidesToScroll: 1,
    navigation: {
        prevEl: '.arrow-prev',
        nextEl: '.arrow-next'
    }
})