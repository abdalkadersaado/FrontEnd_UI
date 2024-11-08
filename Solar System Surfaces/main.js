/* just to select a random surface on start */
/* you can delete this code and still works */
var btns = document.querySelectorAll('input[type=radio]');
var rand = Math.floor(Math.random() * btns.length)
btns[rand].checked = true;