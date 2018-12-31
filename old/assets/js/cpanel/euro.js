function changeeuroon()
{

	document.getElementById("balance").style.display = "table";
    document.getElementById("total_block").style.display = "table-row";
    document.getElementById("euroon").className = "active";
    document.getElementById("eurooff").className = "";
}

function changeeurooff()
{
	document.getElementById("balance").style.display = "none";
    document.getElementById("total_block").style.display = "none";
    document.getElementById("eurooff").className = "active";
    document.getElementById("euroon").className = "";
}

