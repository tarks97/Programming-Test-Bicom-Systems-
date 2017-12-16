
var id = 0;	
var brojac = 0;

function addUser(elementi){

	for(var i = 0; i < elementi.length; i++){
		
		localStorage.setItem(id + "user" + brojac, elementi[i].value);
		brojac++;
	}

	id++;
	brojac = 0;

	return true;
}

function editUser(name){

	var ime;
	var valid = false;
	var array = [];

	for(var i = 0; i < localStorage.length; i++){
		for(var j = 0; j < 4; j++){

			ime = localStorage.getItem(i+"user"+j);

				if(ime == name.value){

					valid = true;
					var x = i;
				}
		}
	}

		for(var j = 0; j < 4; j++){

			if(valid)
				array.push(localStorage.getItem(x+"user"+j));
		}

	return array;
}

function updateUser(elementi, searchInput){


	for(var i = 0; i < localStorage.length; i++){
		for(var j = 0; j < 4; j++){

			var sValue = localStorage.getItem(i+"user"+j);

			if(sValue == searchInput){

				for(var k = 0; k < 4; k++){
				
					localStorage.setItem(i+"user"+k, elementi[k].value);
				}
			}			
		}
	}
}

function deleteUser(name){

	var valid = false;


	for(var i = 0; i < localStorage.length; i++){
		for(var j = 0; j < 4; j++){

			var sValue = localStorage.getItem(i+"user"+j);

			if(sValue == name){

				valid = true;
				var x = i;
			}
		}
	}

	if(valid){
		for(var i = 0; i < 4; i++){

			localStorage.setItem(x+"user"+i, "");
		}
	}
}

function searchUser(searchValue){

	var niz = [];
	var valid = false;

	for(var i = 0; i < localStorage.length; i++){
		for(var j = 0; j < 4; j++){

			var sValue = localStorage.getItem(i+"user"+j);


			if(sValue == searchValue){

				valid = true;
				var x = i;
			}
		}
	}

	if(valid){
		
		for(var i = 0; i < 4; i++){

			niz.push(localStorage.getItem(x+"user"+i));
		}
	}
	return niz;
}