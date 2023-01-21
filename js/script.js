const words = ["Front-End Developer.", "Full-Stack Developer."];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 80);
	};
	loopDeleting();
};

typingEffect();

const modalOpen = document.querySelectorAll('.modal-open')
const modalClose = document.getElementsByClassName('modal-close')[0]
const modal = document.getElementById('modal')
modalOpen.forEach((e)=>{
	e.onclick = function(){
		modal.style.display = "block";
		document.getElementById('modal-img').src = e.currentSrc;
		
	}
	window.onclick = function(event){
		if(event.target==modal){
			modal.style.display = "none";
		}
	}
	
	modalClose.onclick=()=>{
		modal.style.display = "none";
	
	}
})

const menuIcon = document.getElementById("menu-icon")
menuIcon.onclick = function(){
	if(menuIcon.classList.contains('fa-bars')){
		menuIcon.classList.remove('fa-bars')
		menuIcon.classList.add('fa-xmark')
		document.getElementById('menu-navbar').style.display="block"
	}
	else{
		menuIcon.classList.add('fa-bars')
		menuIcon.classList.remove('fa-xmark')
		document.getElementById('menu-navbar').style.display="none"

	}
	
}

const menuNavList = document.getElementById('menu-navbar')
menuNavList.onclick= function(){
	document.getElementById('menu-navbar').style.display="none"
	
}



