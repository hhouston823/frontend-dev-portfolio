document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a data object to send to the server
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Send data to the server
    fetch('https://your-server-endpoint.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('responseMessage').innerText = 'Thank you for your message!';
        } else {
            document.getElementById('responseMessage').innerText = 'There was an error sending your message. Please try again later.';
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = 'There was an error sending your message. Please try again later.';
        console.error('Error:', error);
    });
});