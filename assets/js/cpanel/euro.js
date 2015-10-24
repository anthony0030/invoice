function changeeuroon()
{

	document.getElementById("balance").style.display = "table";
    document.getElementById("num3").style.display = "table-row";
    document.getElementById("euroon").style.display = "none";
    document.getElementById("eurooff").style.display = "block";
}

function changeeurooff()
{
	document.getElementById("balance").style.display = "none";
    document.getElementById("num3").style.display = "none";
    document.getElementById("eurooff").style.display = "none";
    document.getElementById("euroon").style.display = "block";
}

