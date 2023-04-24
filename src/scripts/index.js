const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
burger.addEventListener('click', () => {
	menu.classList.toggle('active')
})
const close = document.getElementById('close')
close.addEventListener('click', () => {
	menu.classList.toggle('active')
})
const links = menu.querySelectorAll('a')
links.forEach((element) => {
	element.addEventListener('click', () => {
		menu.classList.toggle('active')
	})
});

new Swiper('.products-cards', {
	slidesPerView: 'auto',
	spaceBetween: 40,
})
