let form    = document.getElementById('create-post-form');
form.addEventListener('submit', createPun);

async function createPun(e) {
    e.preventDefault();


    let formData = new FormData(this); // Easier to this than e.g. '(document.getElementById('content-textarea').value)'

    //This is the same as console.log(document.getElementById('content-textarea').value)
    console.log('your ' + 'typed: ' + formData.get('content'));
    

    let object = {
        // content: document.getElementById('content-textarea').value
        content: formData.get('content'), // When using formData get the element by 'name' and not by 'id/class'.
        author: formData.get('content'),
        title: formData.get('title')
    }
    console.log(object);
    console.log(JSON.stringify(object));

    try {
        await fetch('http://localhost:3000/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body data type must match "Content-Type" header
            body: JSON.stringify(object)
        });
    } catch (message) {
        throw new Error(message);
    }
}