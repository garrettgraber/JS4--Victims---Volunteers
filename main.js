

//Main part of exercise



var numberDisasterVictims = window.prompt("How many disaster victims do you wish to enter: ", "");

var nameArray = [];
var phoneArray = [];
var streetArray = [];

for ( i = 0; i < numberDisasterVictims; i++) {
	var nameInput = window.prompt("Name: ", "");
	var phoneInput = window.prompt("Phone number: ", "");
	var streetInput = window.prompt("Street: ", "");

	nameArray.push(nameInput);
	phoneArray.push(phoneInput);
	streetArray.push(streetInput);
}

var numberVolunteers = window.prompt("How many volunteers: ", "");

var nameArrayVolunteers = [];
var phoneArrayVolunteers = [];
var streetArrayVolunteers = [];

for ( i = 0; i < numberVolunteers; i++) {
	var nameInput = window.prompt("Name: ", "");
	var phoneInput = window.prompt("Phone number: ", "");
	var streetInput = window.prompt("Street: ", "");

	nameArrayVolunteers.push(nameInput);
	phoneArrayVolunteers.push(phoneInput);
	streetArrayVolunteers.push(streetInput);
}

var peopleInNeed = "People in Need: " + numberDisasterVictims + '\n';
var peopleVolunteers = "Number of volunteers: " + numberVolunteers + '\n';
var peopleInNeedNames = "Disaster victims: " + nameArray.join(', ') + '\n';
var peopleVolunteersNames = "Volunteers: " + nameArrayVolunteers.join(', ') + '\n';
var totalOutput = peopleInNeed + peopleVolunteers + peopleInNeedNames + peopleVolunteersNames;

alert(totalOutput);
console.log(totalOutput);



//Bonus I.



var addNames = true;

while (addNames === true) {

	var nameInput = window.prompt("Name: ", "");
	var phoneInput = window.prompt("Phone number: ", "");
	var streetInput = window.prompt("Street: ", "");

	nameArray.push(nameInput);
	phoneArray.push(phoneInput);
	streetArray.push(streetInput);

	var confirmInput = window.confirm("Add another victim?");

	if (confirmInput === false) {
		addNames = false;
	}

}

var peopleInNeedNames = "Disaster victims: " + nameArray.join(', ') + '\n';
alert(peopleInNeedNames);




//Bonus II.

var PersonInNeed = window.prompt("Enter a person in need: ", "");
var PersonInNeedIndex = nameArray.indexOf(PersonInNeed);
var StreetPersonInNeed = streetArray[PersonInNeedIndex];
var volunteerSameStreetArray = [];

for ( var startSearch = 0; startSearch < streetArrayVolunteers.length; startSearch++) {
	var VolunteerIndex = streetArrayVolunteers.indexOf(StreetPersonInNeed, startSearch);
	console.log(VolunteerIndex);

	if (VolunteerIndex > -1) {
		var VolunteerName = nameArrayVolunteers[VolunteerIndex];
		var VolunteerStreet = streetArrayVolunteers[VolunteerIndex];
		volunteerSameStreetArray.push(VolunteerName);
	}
	else {
		alert("No volunteers on the same street");
	}
}

var volunteersOnSameStreet = "Volunteers on the same street: " + volunteerSameStreetArray.join(', ') + '\n';
alert(volunteersOnSameStreet);







