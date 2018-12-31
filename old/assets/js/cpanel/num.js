function changenumon(){

    document.getElementById("invoice_number_row").style.display = "table-row";
    document.getElementById("numon").className = "active";
    document.getElementById("numoff").className = "";
}

function changenumoff(){
	
    document.getElementById("invoice_number_row").style.display = "none";
    document.getElementById("numoff").className = "active";
    document.getElementById("numon").className = "";
}

