var path = "assets/img/logo/";
var color = "coloron/";
var lang = "en/";
var legal = "normal/";
var name = "logo.jpg";
var logo ="assets/img/logo/coloron/en/normal/logo.jpg";

// change color

function changecoloron(){

	color = "coloron/";
	logo = path + color + lang + legal + name;
    document.getElementById("logo").src= logo;
    document.getElementById("coloron").className = "active";
    document.getElementById("coloroff").className = "";
}

function changecoloroff(){

	color = "coloroff/";
	logo = path + color + lang + legal + name;
    document.getElementById("logo").src= logo;
    document.getElementById("coloroff").className = "active";
    document.getElementById("coloron").className = "";
}




// change lang

function changelogolangen(){

	lang = "en/";
	logo = path + color + lang + legal + name;
    document.getElementById("logo").src= logo;
    document.getElementById("logoen").className = "active";
    document.getElementById("logogr").className = "";
}

function changelogolanggr(){

	lang = "gr/";
	logo = path + color + lang + legal + name;
    document.getElementById("logo").src= logo;
    document.getElementById("logoen").className = "";
    document.getElementById("logogr").className = "active";
}

// change legality

function changelogolegalon(){

	legal = "legal/";
	logo = path + color + lang + legal + name;
    document.getElementById("logo").src= logo;
    document.getElementById("legalon").className = "active";
    document.getElementById("legaloff").className = "";
}

function changelogolegaloff(){

	legal = "normal/";
	logo = path + color + lang + legal + name;
    document.getElementById("logo").src= logo;
    document.getElementById("legalon").className = "";
    document.getElementById("legaloff").className = "active";
}