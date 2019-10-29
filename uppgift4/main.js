const box = document.querySelector('.box')
const tooltip = document.createElement('p')
tooltip.classList.add('tooltip')
box.appendChild(tooltip)

box.addEventListener('mouseenter', function(event) {

let timerId = setTimeout(() => {
    tooltip.textContent = event.target.dataset.tooltip
    tooltip.classList.add('show')
}, 1000);

})

box.addEventListener('mouseleave', function(event) {
  tooltip.classList.remove('show')
})