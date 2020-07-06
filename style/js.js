// Created pasichnik

window.onload = () => {
  document.querySelector(".loader").style.opacity = 0;
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', () =>
    document.querySelector('ul').classList.toggle('open')
  );
};
