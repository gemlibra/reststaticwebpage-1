

const hamburgertoggle = document.getElementById("#hamburger-toggle");
/*Note: Can also use: document.querySelector("#..") */

const navbar = document.querySelector("#navbar");

hamburgertoggle.addEventListener("click", onhamburgerClick);

function onhamburgerClick() {
	if(!navbar.classlist.contains("open")) {
		navbar.classlist.add("open");
	} else {
		navbar.classlist.remove("open")
	}

  /*alert("click"); This displays alert 'click' when hamburger menu is clicked */
}