const modalbg = document.querySelector('.bground');

export function launchModal() {
  modalbg.classList.add('open');
}
export function closeModal() {
  modalbg.classList.remove('open');
}
