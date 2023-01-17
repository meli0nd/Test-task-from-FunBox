
// Присваивание классов
document.querySelector('.box-1').onclick = function () {
  this.classList.toggle('box-1_active')
}
document.querySelector('.box-2').onclick = function () {
  this.classList.toggle('box-2_active')
}

// Клик на "Я передумал"
const nothingHover1 = document.querySelector('.nothing_text')
document.querySelector('.nothing_text').onclick = function first() {
  document.querySelector('.box-1_active').remove('box-1');
  document.querySelector('.box-2_active', '.box-2').remove('box-2');
  document.querySelector('.box-3').remove('box-3');
  document.querySelector('.section_heading').innerHTML = 'Не хочешь - не надо :P'
}

function nothingHover() {
  document.querySelector('.nothing_text').innerHTML = 'Котэ не одобряет?'
}
function somethingHover() {
  document.querySelector('.nothing_text').innerHTML = 'Я передумал, убрать все выбранные'
}

nothingHover1.addEventListener('mouseenter', nothingHover)
nothingHover1.addEventListener('mouseleave', somethingHover)

// Не получилось написать изменение текста выбранного блока

// const firstBlock = document.querySelector('.box-1_active')

// function hoverFirstBlock () {
//   document.querySelector('.box_heading').innerHTML = 'Котэавыа'
// }
// function unhoverFirstBlock () {
//   document.querySelector('.box_heading').innerHTML = 'Сказочное заморское яство'
// }

// firstBlock.addEventListener('mouseenter', hoverFirstBlock)
// firstBlock.addEventListener('mouseleave', unhoverFirstBlock)




