

const menu_toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation')

menu_toggle.addEventListener('click', function(){
    menu_toggle.classList.toggle('active');

    navigation.classList.toggle('active');
})