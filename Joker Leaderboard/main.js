
var elem = function (id){ return document.getElementById(id); }
var qSel = function (el){ return document.querySelectorAll(el); }
var li  = qSel('li');
var pre = qSel('.premiere');
var per = qSel('.performance');
var box = qSel('.box-office');
var bud = qSel('.budget');

elem('byPremiere').addEventListener('click', function() {
	clean();
	for(var i=0; i<pre.length; i++){pre[i].classList.add('active');}
	elem('jack').classList.add('one');
	elem('heath').classList.add('two');
	elem('jared').classList.add('three');
	elem('joaquin').classList.add('four');
	this.classList.add('active');
});
elem('byBoxOffice').addEventListener('click', function() {
	clean();
	for(var i=0; i<box.length; i++){box[i].classList.add('active');}
	elem('joaquin').classList.add('one');
	elem('heath').classList.add('two');
	elem('jared').classList.add('three');
	elem('jack').classList.add('four');
	this.classList.add('active');
});
elem('byBudget').addEventListener('click', function() {
	clean();
	for(var i=0; i<bud.length; i++){bud[i].classList.add('active');}
	elem('jack').classList.add('one');
	elem('joaquin').classList.add('two');
	elem('jared').classList.add('three');
	elem('heath').classList.add('four');
	this.classList.add('active');
});
elem('byPerformance').addEventListener('click', function() {
	clean();
	for(var i=0; i<per.length; i++){per[i].classList.add('active');}
	elem('heath').classList.add('one');
	elem('jack').classList.add('two');
	elem('joaquin').classList.add('three');
	elem('jared').classList.add('four');
	this.classList.add('active');
});

function clean(){
	for(var i=0; i<li.length; i++){li[i].className='';}
	var actives = qSel('.active');
	for(var i=0; i<actives.length; i++){actives[i].classList.remove('active');}
}

//initial rise
setTimeout(function(){ elem('byPerformance').click(); }, 1000);

