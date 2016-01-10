'use strict'

let aaa="The current time is ";

function dateNow(){

	return aaa + new Date();
}

function davidfalconer(){

	return "david falconer";
}

module.exports = {
	dateNow,
	davidfalconer
}

