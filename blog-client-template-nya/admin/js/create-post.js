let form    = document.getElementById("create-post-form");
form.addEventListener('submit', createPost);
document.getElementById('title-textarea')

async function createPost(e) {
    e.preventDefault();
    let formData = new FormData(this); // Easier to do this than e.g. '(document.getElementById('content-textarea').value)'
    let object = {
        content: formData.get('content'), // When using formData get the element by 'name' and not by 'id or class'.
        author:  document.getElementById('author-textarea').value,
        title:   document.getElementById('title-textarea').value,
        tags:    $('#select-tags').val()
    }
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