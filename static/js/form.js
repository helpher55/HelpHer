
function saveForm() {
	var abuso = document.getElementById("abusoField").value;
	var quantasvezes = document.getElementById("vezesField").value;
	var descricao = document.getElementById("descrevaTextArea").value;

	var url = "/saveForm?"
				+ "abuso=" + abuso 
				+ "&quantasvezes=" + quantasvezes 
				+ "&descricao=" + descricao 
				+ "&login=" + login 
				+ "&userid=" + userid 
				+ "&token=" + token;
	
	$.post(url, {}, function(response) {
		var itemid = response;
		listForm();
	});
}

function listForm() {
	var url = "/listForm?"
				+ "login=" + login 
				+ "&userid=" + userid 
				+ "&token=" + token;
	
	$.post(url, {}, function(response) {
		var list = "";
		var items = jQuery.parseJSON(response);
		for(var k in items) {
			var item = items[k];
			var date = "";
			if (item.timestamp != undefined && (item.timestamp != "")) {
				var date = new Date(item.timestamp.$date);
			}
		   	list += "<hr>" + 
		   			date + "<br/>" +
		   			"Abuso: " + item.abuso + "<br/>" + 
		   			"Primeira vez? " + item.quantasvezes + "<br/>" + 
		   			item.descricao;
		}
		document.getElementById("listFormDiv").innerHTML = list + "<hr>";
	});
}