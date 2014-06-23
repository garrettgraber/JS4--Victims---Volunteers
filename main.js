

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

alert(peopleInNeed + peopleVolunteers + peopleInNeedNames + peopleVolunteersNames);
