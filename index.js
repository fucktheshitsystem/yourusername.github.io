// Get the form element and attach a submit event listener
const rentForm = document.getElementById('rent-form');
rentForm.addEventListener('submit', function(event) {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the form data and format it as a query string
	const formData = new FormData(rentForm);
	const formDataString = new URLSearchParams(formData).toString();

	// Send a POST request to the server with the form data
	fetch('/rent', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: formDataString
	})
	.then(response => {
		if (response.ok) {
			// If the server responds with a 200 OK status code,
			// display a success message to the user
			alert('Your rental request has been sent.');
		} else {
			// If the server responds with an error status code,
			// display an error message to the user
			alert('There was an error sending your rental request.');
		}
	})
	.catch(error => {
		// If there is a network error, display an error message to the user
		alert('There was a network error sending your rental request.');
	});
});
