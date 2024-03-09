// JavaScript Document to control the survey multistep form
//A portion of the code is based off of URL: https://www.w3schools.com/howto/howto_js_form_steps.asp
//Any function that has a comment saying "Based on w3schools" means at least a portion of the function was based on their tutorial,
//or the logic of the funcation follows their tutorial.
//Some variables and function names may be different for simplicity and use with the overall project for group 26.

var currTab = 0;

//document.addEventListener("DOMContentLoaded", function(){displayPage(currTab);});

$(window).load(function(){
	displayPage(currTab);
});

//Based on w3schools
//Function for displaying the inputted step index integer for our multistep form
//param		n		integer representing the page index of what we want to display
function displayPage(n){
	var m = document.getElementsByClassName("surveryPage");
	m[n].style.display = "block";
	
	if(n==0){
		document.getElementById("prevBtn").style.display = "none";
	}else{
		document.getElementById("prevBtn").style.display = "inline";
	}
	if(n == (m.length-2)){
		document.getElementById("nextBtn").style.display = "inline";
		document.getElementById("nextBtn").innerHTML = "Confirm Survey";
	}else if(n == (m.length-1)){
	    document.getElementById("nextBtn").style.display = "none";
	}else{
	    document.getElementById("nextBtn").style.display = "inline";
		document.getElementById("nextBtn").innerHTML = "Next";
	}
	if(RadioValid()){
	    document.getElementById("confirmParagraph").style.display = "none";
	    document.getElementById("submitBtn").style.display = "inLine";
	}
	
	fixStepIndicator(n);
}

//Based on w3schools
//Function for changing which page of the multistep form based on input value
//param		n		the input value for determine the new current tab value
//					by adding n to our running currTab 
function changePage(n){
	var m = document.getElementsByClassName("surveryPage");
	m[currTab].style.display = "none";
	currTab = currTab + n;
	if((currTab >= m.length)){
		document.getElementById("SurveyForm").submit();
		return false;
	}
	displayPage(currTab);
}

//Based on w3schools
//Function for correctly showing which step of the multi-step form we are currently on
//param		n		the number corresponding to the current step
function fixStepIndicator(n){
	var m = document.getElementsByClassName("step");
	for (var i = 0; i < m.length; i++){
		m[i].className = m[i].className.replace(" active", "");
	}
	
	m[n].className += " active";
}


//Function to return false if any of the radio buttons are not clicked
function RadioValid(){

	var stringArr = [	'Godrick', 'Rennala', 'Radahn', 'Morgott', 'Rykard', 
						'Mohg', 'Malenia', 'Fortissax', 'Maliketh', 'Astel', 
						'Regal', 'Radagon', 'Godfrey', 'Fire_Giant', 'Placidusax'	];

	var bool = true;
	stringArr.forEach(function(str){
		if(!($('input[name=' + str + ']:checked').length > 0))
			bool = false;
	});

	return bool;
}

function sendData()
{
	var splitForm = $("#SurveyForm").serialize().split('&');

	var jsn = 
	{
		"Godrick": parseInt(splitForm[0].split('=')[1]),
		"Rennala": parseInt(splitForm[1].split('=')[1]),
		"Radahn": parseInt(splitForm[2].split('=')[1]),
		"Morgott": parseInt(splitForm[3].split('=')[1]),
		"Rykard": parseInt(splitForm[4].split('=')[1]),
		"Mohg": parseInt(splitForm[5].split('=')[1]),
		"Malenia": parseInt(splitForm[6].split('=')[1]),
		"Lichdragon": parseInt(splitForm[7].split('=')[1]),
		"Maliketh": parseInt(splitForm[8].split('=')[1]),
		"Astel": parseInt(splitForm[9].split('=')[1]),
		"Regal": parseInt(splitForm[10].split('=')[1]),
		"Radagon": parseInt(splitForm[11].split('=')[1]),
		"Godfrey": parseInt(splitForm[12].split('=')[1]),
		"Fire_Giant": parseInt(splitForm[13].split('=')[1]),
		"Placidusax": parseInt(splitForm[14].split('=')[1])
	};

	$.ajax({
		url: '/send_data',
		dataType: 'json',
		type: "POST",
		data: JSON.stringify(jsn),
		contentType: "applicaton/json",
		success : (data) => {
            console.log('send_data response: ' + data)
        },
        error : (data) => {
            console.log(data)
        }
	});
	document.getElementById("confirmParagraph").innerHTML = "Thank you for your submission";
	document.getElementById("confirmParagraph").style.display = "inline";
	document.getElementById("submitBtn").style.display = "none";
}