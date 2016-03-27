function new_file() {
	document.getElementById("file").innerHTML += new_file_data;
}

function serial_file() {
	var x = document.getElementById("top_data_table").rows[0].cells;	
	x[1].innerHTML = serial;
}

function import_file() {

}

function export_file() {
	document.getElementById('my_form').submit();
}