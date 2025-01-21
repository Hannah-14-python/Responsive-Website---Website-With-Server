document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const name = form.elements[0].value;
            const email = form.elements[1].value;

         
            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                alert(data.message); 
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error); 
                alert('There was an error with your registration. Please try again.');
            });
        });
    }
});