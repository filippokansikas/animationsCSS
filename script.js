function cambiaColore() {
 const button = document.getElementById('button');
 const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
 button.style.backgroundColor = randomColor;
}
document.querySelector('.toggle-curtain').addEventListener('click', function() {
    document.querySelector('.curtain').classList.toggle('open');
});