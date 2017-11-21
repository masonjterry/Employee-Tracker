  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9l5Gz40ti78B7i3x5uTowD-Z0U25JioY",
    authDomain: "myawesomeproject-cb94b.firebaseapp.com",
    databaseURL: "https://myawesomeproject-cb94b.firebaseio.com",
    projectId: "myawesomeproject-cb94b",
    storageBucket: "myawesomeproject-cb94b.appspot.com",
    messagingSenderId: "838719458283"
  };
  firebase.initializeApp(config);

$(document).ready(function() {

	var database = firebase.database();

	$("#button").on("click", function() {

		console.log("button clicked");

		var employeeName = $("#employee-name").val().trim();
		var role = $("#role").val().trim();
		var startDate = $("#start-date").val().trim();
		//var monthsWorked = $("#").val().trim();
		var monthlyRate = $("#monthly-rate").val().trim();
		//var totalBilled = $("#").val().trim();

		console.log(employeeName);
		console.log(role);
		console.log(startDate);
		console.log(monthlyRate);

		database.ref().push({
			employeeName: employeeName,
			role: role,
			startDate: startDate,
			//monthsWorked: monthsWorked,
			monthlyRate: monthlyRate,
			//totalBilled: totalBilled
		})

		var newRow = $("<tr><td>" + employeeName + "</td><td>" + role + "</td><td>" + startDate + "</td><td>" + + "</td><td>" + monthlyRate + "</td><td>" + + "</td></tr>");

		$("#table").append(newRow);

	});

});