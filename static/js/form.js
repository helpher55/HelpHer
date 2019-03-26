var fbtoken = "";

function saveForm() {
	
	var abuso = document.getElementById("abusoField").value;
	var quantasvezes = document.getElementById("vezesField").value;
	var descricao = document.getElementById("descrevaTextArea").value;

	var url = "/saveForm?abuso=" + abuso 
					+ "&quantasvezes=" + quantasvezes 
					+ "&descricao=" + descricao 
					+ "&fbtoken=" + fbtoken;
	
	$.post(url, {}, function(response) {
		document.getElementById("formResponse").innerHTML = "<center><font color='darkblue'><b>Obrigada pelo Feedback!</b></font></center>";
	});
}