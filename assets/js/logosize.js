function logosize(num){
	var size = document.getElementById('size');
	document.getElementById('logo').style.width = num+"px";   
	result.innerHTML = num+"px";
}

function resetlogosize(num){
	document.getElementById('logo').style.width = num+"px";
	document.getElementById('size').value = num;
	result.innerHTML = num;
}

