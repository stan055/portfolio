const sidebarBox = document.querySelector('#box'),
sidebarBtn = document.querySelector('#btn'),
pageWrapper = document.querySelector('#page-wrapper');
items = document.querySelectorAll('#box #items a');

sidebarBtn.addEventListener('click', event => {
sidebarBtn.classList.toggle('active');
sidebarBox.classList.toggle('active');
});

items.forEach(element => {
        element.addEventListener('click', event => {
                sidebarBtn.classList.remove('active');
                sidebarBox.classList.remove('active');
        });
});

// pageWrapper.addEventListener('click', event => {

// if (sidebarBox.classList.contains('active')) {
//         sidebarBtn.classList.remove('active');
//         sidebarBox.classList.remove('active');
// }
// });


window.addEventListener('click', event => {
console.log('click');
if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
        sidebarBtn.classList.remove('active');
        sidebarBox.classList.remove('active');
}
});


