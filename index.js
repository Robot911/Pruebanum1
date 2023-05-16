const yesBtn = document.querySelector('#yes8');

yesBtn.addEventListener('click',function () {
    alert('Yo sabía que eras pvto')
});

const noBtn = document.querySelector('#Nou7');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})