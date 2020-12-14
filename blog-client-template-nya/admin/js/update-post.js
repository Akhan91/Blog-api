window.onload = function () {
    
    // **** GET POST *****

    let authorArea  = document.getElementById("author-textarea");
    let titleArea   = document.getElementById("title-textarea");
    // let textArea    = document.getElementById("content-textarea");
    
    preFillForm()
    updatePunEvent()
    
    async function preFillForm() {
        let urlParams   = new URLSearchParams(window.location.search);
        
        
        try {
            let response = await fetch('http://localhost:3000/posts/' + urlParams.get('id'));
            let data = await response.json();


            // This takes the value of 'content', 'title', 'author' and puts in the text-fields
            titleArea.innerHTML = data.title;
            authorArea.innerHTML = data.author;
            document.getElementById("content-textarea").innerHTML  = data.content;
            document.getElementById("author-textarea").innerHTML  = data.author;
            document.getElementById("title-textarea").innerHTML  = data.title;
            
            console.log(data.title);
            console.log(data.author);
            console.log(data.content);

        }
        catch (message) {
            throw new Error(message)
        }
    }

    // **** UPDATE POST ****
    

    function updatePunEvent() {

            let urlParams = new URLSearchParams(window.location.search);
        
            let form = document.getElementById('update-post-form');
            form.addEventListener('submit', async function (e) {
                e.preventDefault();
                
                let formData = new FormData(this);
                let object = {
                    content: formData.get('content'), // When using formData get the element by 'name' and not by 'id/class'.
                    author: document.getElementById('author-textarea').value,
                    title: document.getElementById('title-textarea').value
                }
            
                console.log(object);
                console.log(JSON.stringify(object));
                
                try {
                    await fetch('http://localhost:3000/posts/' + urlParams.get('id'), {
                        method: 'PATCH', // GET, POST, PATCH, DELETE
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(object) // body data type must match "Content-Type" header
                    });

                    window.location.replace('manage-posts.html') // redirects to the index.html page
                } catch (message) {
                    throw new Error(message);
                }
            });
      }
}

  


