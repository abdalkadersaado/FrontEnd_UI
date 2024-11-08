
orderType = 'DESC';

var followers = [
	"Digital Advantage@tdometech",
	"Camille Guy@camilleguy",
	"Saima Azhar@Symaazhar",
	"Umair Baig@umairbaig8",
	"Aman Abbasi@aman-abbasi",
	"vizz0r@vizz0r",
	"Suresh Swaminathan@sureshvgs",
	"Kevin@Flykev",
	"chrishau5@chrishau5",
	"D rope@droper327",
	"pedram@zesht",
	"wangluyao@wangluy70343546",
	"dee@desriix",
	"Colleen Lohr 🙃@cmlohr",
	"Bucks24@bucks24",
	"Nosa mohamed@fm1234",
	"Steve Tovar@steve-tovar",
	"-MP-@-MP-",
	"elijah@itsyaboielijah",
	"Karan@candyman46",
	"Atash@acerkesha",
	"Mensah Gideon@mensah-gideon",
	"Anderson@andersoncampos",
	"Pixilions@pixilions",
	"Shivang-cyber@syberpunk",
	"NightOfAmaterasu@HereToStay",
	"milad@Milad-Dolatari",
	"Asencio@ace20",
	"Ian@Iannie256",
	"Annoying Sharma@AnnoYing_Sharma",
	"abdirmo@abdirmo",
	"Mohammad Faizan@mofaizan_fdn",
	"Kristopher Van Sant@KristopherVanSant",
	"Nestor Josue Argueta Ayala@Nesjo",
	"Privilege Babitseng@privilege-babitseng",
	"Ermis Zi@ermisz",
	"aexcode@aexcode",
	"Mohamed Abdullsalam@mohammed4mach",
	"Devendra Nishad@Devplay9847",
	"yenydn@yenydn",
	"Yonas@Kin-yon",
	"Alexander@t1568",
	"Aeviles Aguiar Silva@aeviles-aguiar-silva",
	"AidenYap@Aidenyapz04",
	"April Scott@JustABeginner2020",
	"Jason Melton@cooljasonmelton",
	"Bùi Sơn Hưng@BuiSonHung",
	"MattDClarke@MattDC1",
	"ADIADI@SCIENCE2",
	"511823437@511823437",
	"Swayam@4yy",
	"shivetay@shivetay",
	"DISHA@dummuforu",
	"Shivansh yaduvanshi@Shivansh-yaduvanshi",
	"Sena@sena-ylmzcn",
	"Rabab Rahman@Rababr1",
	"Will@willwang-x",
	"gogowang@awatown",
	"Yehan Wasura@yehanwasura",
	"Yessenzhol@yessenzhol",
	"jasonprogrammer775@jasonprogrammer775",
	"Desire Iruke@desire-iruke",
	"Ric Chang@ricc7",
	"Coder@Random_Coder_",
	"Dev Lopper@DevUEF",
	"Melissa K@wordsthatrhyme",
	"Emmanuel González Contreras@emmanuel-gonz-lez-contreras",
	"Chris Richardson@richardsonchrisj",
	"Ahmet Kerem Çavdar@keremcavdar_",
	"Santo Khan@santokhan1999",
	"Salome Akhaladze@salome-akhaladze",
	"matin@matin--83",
	"kaden@kadenmotter",
	"benben-miao@benben-miao",
	"Kakashi Sonic@Bro_is_Pro",
	"Valentino Figueroa@Arkadian1984",
	"Nacho Lambertini@nachuelo",
	"casper392945@casper392945",
	"WebDeveloper@Web-Creator-Developer",
	"David Hernandez@brodave318",
	"Jacob Beltran@jacob-beltran",
	"Iñaki Calvo@inakicalvo",
	"fernandocomet@fernandocomet",
	"Matthew Davis@gametroll",
	"laraib@laraibmalik",
	"MINGYU HUANG@virgia",
	"Archit Pandey@arch075",
	"tahar@tahar-zaitar",
	"Daniel Ebosereme Emmanuel@daniel-ebosereme-emmanuel",
	"Iftekhar Inan@iinan",
	"dariusartematlas@ffttrrddssll",
	"akshith@akshith-n",
	"RFNews@rfnews4",
	"Vraiker@Vraiker",
	"Thiago Ruzon@thiagoruzon",
	"Syd@Sydyuan",
	"Anthony Louis Johnson@anthonylouisjohnson",
	"Lijin Nair@lijinnair",
	"louis@louismoura",
	"Luis Pariona@LuisPariona"
];

for(var i=0; i<followers.length; i++){
	var ul = document.getElementById('followers-list');
	var li = document.createElement("li");
	var a = document.createElement("a");
	var img = document.createElement("img");
	var str = document.createElement("strong");
	var spn = document.createElement("span");
	var em  = document.createElement("em");	
	var user = followers[i].split('@');	
	var lett = followers[i].charAt(0);
	li.setAttribute('data-index',i);
	li.setAttribute('data-name',user[0]);
	li.setAttribute('data-index',('0' + i).slice(-2));
	li.appendChild(a);
	img.setAttribute('src', 'https://eu.ui-avatars.com/api/?background=random&name='+lett+'&font-size=0.6');
	a.appendChild(img);
	str.appendChild(document.createTextNode(user[0]));
	a.appendChild(str);
	spn.appendChild(document.createTextNode('@'+user[1]));
	a.appendChild(spn);
	em.appendChild(document.createTextNode(100 - i));
	a.appendChild(em);
	a.setAttribute('href','https://codepen.io/'+user[1]);
	a.setAttribute('target','_blank');
	ul.appendChild(li);
}

document.getElementById('order-by').addEventListener('click', function() {
	if(this.innerText=='NAME'){
		this.innerText='DATE';
		Array.from(document.querySelectorAll("ul > li[data-index]"))
		.sort(({dataset: {index: a}}, {dataset: {index: b}}) =>  orderType=='DESC' ? a.localeCompare(b) : b.localeCompare(a))
		.forEach((item) => item.parentNode.appendChild(item));
	} else {
		this.innerText='NAME';
		Array.from(document.querySelectorAll("ul > li[data-name]"))
		.sort(({dataset: {name: a}}, {dataset: {name: b}}) =>  orderType=='ASC' ? a.localeCompare(b) : b.localeCompare(a))
		.forEach((item) => item.parentNode.appendChild(item));
	}
});

document.getElementById('order-type').addEventListener('click', function() {
	this.innerText=='ASC' ? this.innerText='DESC' : this.innerText='ASC';
	orderType=='ASC' ? orderType='DESC' : orderType='ASC';
	document.getElementById('order-by').click();
	document.getElementById('order-by').click();
});
