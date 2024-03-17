document.querySelector('.select__title').addEventListener('click', function () {
  document.querySelector('.select__body').classList.toggle('_active');
});

document.querySelectorAll('.select__body_item').forEach(el =>
  el.addEventListener('click', function (e) {
    document.querySelector('.select__text').textContent = e.target.textContent;
    document.querySelector('.select__body').classList.remove('_active');
  })
);

document.querySelector('#range_slider').addEventListener('input', function (e) {
  document.querySelector('#range_value').textContent = e.target.value + '%';
});

document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('.header__menu').classList.toggle('_active');
});
