const preloader = document.getElementById('preloader') as HTMLElement;
const authBtn = document.querySelector('.auth__button') as HTMLElement;
const authModal = document.getElementById('authModal') as HTMLElement;
authBtn.addEventListener('click', addPreloader);

export function addPreloader() {
    preloader.classList.remove('unactive');
    authModal.classList.add('hidden');
}

export function removePreloader() {
    preloader.classList.add('unactive');
}


export {authBtn}
