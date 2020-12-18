window.onload = function () {
    
    // **** GET POST *****

    let authorArea  = document.getElementById("author-textarea");
    let titleArea   = document.getElementById("title-textarea");
    let selectTags  = document.querySelector(".tag-option");
    
    preFillForm()
    updatePost()
    
    async function preFillForm() {
        let urlParams   = new URLSearchParams(window.location.search);
        try {
            let response    = await fetch('http://localhost:3000/posts/' + urlParams.get('id'));
            let data        = await response.json();
            
            // This takes the value of 'content', 'title', 'author' and puts in the text-fields
            titleArea.innerHTML  = data.title;
            authorArea.innerHTML = data.author;
            selectTags           = data.tags;
            document.getElementById("content-textarea").innerHTML  = data.content;
            document.getElementById("author-textarea").innerHTML   = data.author;
            document.getElementById("title-textarea").innerHTML    = data.title;
            document.getElementById("select-tags").value           = data.tags;
        }
        catch (message) {
            throw new Error(message)
        }
    }

    // ****** UPDATE POST *******
    
    function updatePost() {
        let urlParams = new URLSearchParams(window.location.search);
        let form      = document.getElementById('update-post-form');
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            // When using formData get the element by 'name' and not by 'id/class'.
            let formData = new FormData(this);
            let object = {
                content:    formData.get('content'), 
                author:     document.getElementById('author-textarea').value,
                title:      document.getElementById('title-textarea').value,
                tags:       $('#select-tags').val()


            }
            try {
                await fetch('http://localhost:3000/posts/' + urlParams.get('id'), {
                    method: 'PATCH',
                    headers: {
                            'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(object)
                });
                    window.location.replace('manage-posts.html')
            } catch (message) {
                    throw new Error(message);
            }
        });
    }
}

  


