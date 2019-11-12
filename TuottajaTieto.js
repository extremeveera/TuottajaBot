function submitForm() {
	// Validation
	var name = document.getElementById("name").value;
	if (name == "") 
	{
		alert("Haluamme tietaa kuka sina olet!");
		return false;
	}
	
	// Tekstin printtaus
	var messageText = document.getElementById("message");
	messageText.innerText = "Thank you for rating TuottajaBot, " + name;
}