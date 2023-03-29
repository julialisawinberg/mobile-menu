//skapa ref till html-taggar
let menuIcon = document.querySelector('#js-menu-toggle');
let menuList = document.querySelector('#js-menu');

//lägga på en lyssnare på menu icon som lyssnar efter click
menuIcon.addEventListener('click', function () {
    //vad ska hönda när jag klickar?
    console.log('click på icon');
    //lägger på en class p menu list på clikc
    menuList.classList.toggle('active');
    menuIcon.classList.toggle('exit');
});