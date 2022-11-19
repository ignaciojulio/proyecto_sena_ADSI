/* Selecting the elements with the class names footer-botón, botón_atrás, botón_atrás_restablecer,
restablecer and botón_reenviar. */
const botónRegistro = document.querySelector('.footer-botón');
const botónAtrás = document.querySelector('.botón_atrás');
const botónAtrásRestablecer = document.querySelector('.botón_atrás_restablecer');
const restablecer = document.querySelector('.restablecer');
const botónReenviar = document.querySelector('.botón_reenviar');

/* Seleccionando los elementos con los nombres de clase content_registro, content_login y
content_restablecer. */
const contentRegistro = document.querySelector('.content_registro');
const contentLogin = document.querySelector('.content_login');
const contentRestablecer = document.querySelector('.content_restablecer');

/* Agregar un detector de eventos al botón. */
botónRegistro.addEventListener('click', _ => toggleElement(contentLogin, contentRegistro, 'inactive'));
botónAtrás.addEventListener('click', _ => toggleElement(contentLogin, contentRegistro, 'inactive'));
restablecer.addEventListener('click', _ => toggleElement(contentLogin, contentRestablecer, 'inactive'));
botónAtrásRestablecer.addEventListener('click', _ => toggleElement(contentLogin, contentRestablecer, 'inactive'));

/**
 * Alterna la clase de dos elementos.
 * @param elemento1 - El primer elemento para alternar la propiedad.
 * @param elemento2 - el elemento que se alternará
 * @param propiedad - la propiedad que se alternará.
 */
function toggleElement(elemento1, elemento2, propiedad) {
    elemento1.classList.toggle(propiedad);
    elemento2.classList.toggle(propiedad);
};