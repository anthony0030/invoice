function new_file() {
	document.getElementById("file").innerHTML += new_file_data;
}

function serial_file() {
	document.getElementById("serial").value = serial;
}

function import_file() {

}

function export_file() {
	document.getElementById('my_form').submit();
}