const blogForm = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-description').value.trim();
    const body = document.querySelector('#blog-body').value.trim();
    const instagram = document.querySelector('#user-instagram').value.trim();
    const created = document.querySelector('#blog-created').value.trim();

    if (title && description && body && salary && instagram && created) {
        const response = await fetch('/blog', {
            method: 'POST',
            body: JSON.stringify({ title, description, body, salary, instagram, created }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/blogs');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.blog-form').addEventListener('submit', blogForm);