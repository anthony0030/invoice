function changeeuroon()
{

	document.getElementById("balance").style.display = "table";
	document.getElementById("cpanel").style.marginTop = "0px";
    document.getElementById("euroon").style.display = "none";
    document.getElementById("eurooff").style.display = "block";
}

function changeeurooff()
{
	document.getElementById("balance").style.display = "none";
	document.getElementById("cpanel").style.marginTop = "140px";
    document.getElementById("eurooff").style.display = "none";
    document.getElementById("euroon").style.display = "block";
}

