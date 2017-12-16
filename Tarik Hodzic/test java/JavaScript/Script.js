
var divovi = document.getElementsByClassName("div");

for(var i = 0; i < divovi.length; i++){

	divovi[i].classList.add("hide");
}


function onclickDiv(divID){

	for(var i = 0; i<divovi.length; i++){

		if(divovi[i].id != divID)
			divovi[i].classList.add("hide");
		else
			divovi[i].classList.remove("hide");
	}
}


function validateInput(e){

	var valid = true;

	if(e.value == "")
		valid = false;

	if(!valid)
		e.classList.add("error");
	else
		e.classList.remove("error");

	return valid;
}

function onClickValidation(divID){


	var elementi;

	if(divID == "one")
		elementi = document.getElementsByClassName("firstInput");
	else if(divID == "two")
		elementi = document.getElementsByClassName("secondInput");
	else if(divID == "three")
		elementi = document.getElementsByClassName("thirdInput");
	else if(divID == "four")
		elementi = document.getElementsByClassName("fourthInput");

	var valid = true;

	for(var i = 0; i < elementi.length; i++){

		if(validateInput(elementi[i]) == false)
			valid = false;
	}

	if(divID == "one" && valid == true){

		if(addUser(elementi) == false)
			valid = false;


		if(valid){

			for(var i = 0; i < elementi.length; i++)

				elementi[i].value = "";
			}
	}

	if(divID == "two"){

		var buttonInput = document.getElementById("searchButton");

			updateUser(elementi, buttonInput.value);

			for(var i = 0; i < elementi.length; i++){

				elementi[i].value = "";
			}
	}

	if(divID == "three"){

		var deleteInput = document.getElementById("deleteInput");

		deleteUser(deleteInput.value);

		deleteInput.value = "";
	}

	if(divID == "four"){

		var searchValue = document.getElementById("lookup");
		var table = document.getElementById("searchTable");


		for(var i = 0; i < 3; i++){

			if(table.rows[i].cells.length>1){
				table.rows[i].deleteCell(1);
			}
		}

		if(searchUser(searchValue.value).length > 0){
			for(var i = 0; i < 3; i++){

				var cell = table.rows[i].insertCell(-1);
				cell.innerHTML = searchUser(searchValue.value)[i];
			}
		}
		else 
			alert("User doesnt exist");
	}

	return valid;
}


function validateSearchButton(){

	var button = document.getElementById("searchButton");
	var elements = document.getElementsByClassName("secondInput");

	var valid = true;

	if(validateInput(button) == false)
		valid = false;

	if(valid){

		for(var i = 0; i < elements.length; i++){

			elements[i].type = "text";
			elements[i].value = editUser(button)[i];

		}

		document.getElementById("edit").type = "button";
	}

	return valid;
}