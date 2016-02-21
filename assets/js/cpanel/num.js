function changenumon(){

    document.getElementById("num2").style.display = "table-row";
    document.getElementById("numon").className = "active";
    document.getElementById("numoff").className = "";
}

function changenumoff(){
	
    document.getElementById("num2").style.display = "none";
    document.getElementById("numoff").className = "active";
    document.getElementById("numon").className = "";
}

