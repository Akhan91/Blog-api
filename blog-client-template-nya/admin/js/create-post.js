let form = document.getElementById("create-post-form");
form.addEventListener('submit', createPost);


async function createPost(e) {
    e.preventDefault();


    let formData = new FormData(this); // Easier to this than e.g. '(document.getElementById('content-textarea').value)'

    //This is the same as console.log(document.getElementById('content-textarea').value)
    console.log('you ' + 'typed: ' + formData.get('content'));
    

    let object = {
        content: formData.get('content'), // When using formData get the element by 'name' and not by 'id/class'.
        author: document.getElementById('author-textarea').value,
        title: document.getElementById('title-textarea').value
    }

    // Shows the title, author, content
    console.log(object);

    // console.log(JSON.stringify(object));



    try {
        await fetch('http://localhost:3000/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body data type must match "Content-Type" header
            body: JSON.stringify(object)
        });

        window.location.replace('manage-posts.html')
    } catch (message) {
        throw new Error(message);
    }
}

function formatFormData(formData) {
    let obj = {};
    for (let key of formData.keys()) {
        obj[key] = formData.get(key);
    }

    return obj;
}