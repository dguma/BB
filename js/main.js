const expanderContainerOuter = document.querySelectorAll('.expander');
const expanderContainerInner = document.querySelectorAll('.expander__panel');
const footerExpanderTitles = document.querySelectorAll('.expander__toggle');

const body = document.querySelector('body');

if(window.outerWidth <= 1024) {
	for(let i = 0; i < expanderContainerInner.length; i++){
		expanderContainerInner[i].style.display = 'none';
		footerExpanderTitles[i].addEventListener('click', (event) => {
			if(event.target.nextElementSibling.className == expanderContainerInner[i].className) {
				expanderContainerInner[i].style.display = 'block';
			}
		})
	}
}