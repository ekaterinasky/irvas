const modals = () => {

	const bindModal = (triggerSelector, modalSelector, closeSelector) => {
		const triggersElements = document.querySelectorAll(triggerSelector);
		const modalElement = document.querySelector(modalSelector);
		const closeElement = document.querySelector(closeSelector);


		triggersElements.forEach(item => {
			item.addEventListener('click', (evt) => {
				if (evt.target) {
					evt.preventDefault();
				}

				modalElement.style.display = "block";
				document.body.style.overflow = "hidden";
			});
		});

		closeElement.addEventListener('click', () => {
			modalElement.style.display = "none";
			document.body.style.overflow = "";
		});

		modalElement.addEventListener('click', (evt) => {
			if (evt.target === modalElement) {
				modalElement.style.display = "none";
			 	document.body.style.overflow = "";
			}
		});
	}
// функция показа модального окна каждые N минут/секунд
	const showModalByTime = (selector, time) => {
		setInterval(function() {
			const modal = document.querySelector(selector)
			if (modal){
			modal.style.display = 'block';
			document.body.style.overflow = "hidden";
			}
		}, time);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	// showModalByTime('.popup', 60000);
};

export default modals;
