const expanderContainerOuter = document.querySelectorAll('.expander');
const expanderContainerInner = document.querySelectorAll('.expander__panel');
const footerExpanderTitles = document.querySelectorAll('.expander__toggle');
const footerExpanderSymbol = document.querySelectorAll('.expander__icon');
const pageFooter = document.querySelector('.footer-top');
const sliderBackgroundConatiner = document.querySelector('.slide__bg');

if(window.outerWidth <= 1024) {
	for(let i = 0; i < expanderContainerInner.length; i++){
		expanderContainerInner[i].style.display = 'none';
		expanderContainerOuter[i].style.borderTop = '1px solid #D3D3D3';
		expanderContainerOuter[2].style.borderBottom = '1px solid #D3D3D3';
		expanderContainerOuter[i].style.width = `${pageFooter.offsetWidth}px`;
		
		footerExpanderTitles[i].addEventListener('click', (event) => {
			if(event.target.parentNode.nextElementSibling.className == expanderContainerInner[i].className) {
				expanderContainerInner[i].style.display = 'block';
			}
		})
		
		footerExpanderSymbol[i].addEventListener('click', (event) => {
			if(event.target.parentNode.nextElementSibling.className == expanderContainerInner[i].className) {
				expanderContainerInner[i].style.display = 'block';
			}
		})
	}
}


setInterval(() => {
	setTimeout(() => {
			sliderBackgroundConatiner.children[0].style.display = 'none';
			sliderBackgroundConatiner.children[1].style.display = 'block';
		})
		setTimeout(() => {
			sliderBackgroundConatiner.children[1].style.display = 'none';
			sliderBackgroundConatiner.children[2].style.display = 'block';
		},3000)
		setTimeout(() => {
			sliderBackgroundConatiner.children[2].style.display = 'none';
			sliderBackgroundConatiner.children[0].style.display = 'block';
		},6000)
},9000)
		

