function changeeuroon()
{

	document.getElementById("balance").style.display = "table";
    document.getElementById("num3").style.display = "table-row";
    document.getElementById("euroon").className = "active";
    document.getElementById("eurooff").className = "";
}

function changeeurooff()
{
	document.getElementById("balance").style.display = "none";
    document.getElementById("num3").style.display = "none";
    document.getElementById("eurooff").className = "active";
    document.getElementById("euroon").className = "";
}

