// window.onload = function () {
//     // let textArea    = document.getElementById("content-textarea");
//     prefillForm();
//     updatePunEvent();
    
    
//     async function prefillForm() {
//         let urlParams = new URLSearchParams(window.location.search);
//     console.log(urlParams.get('id')); // Den här ger null 
    
//     try {
//         let response = await fetch('http://localhost:3000/posts/' + urlParams.get('id'));
//         let data = await response.json();
//         console.log(data.content); // Den här ger 'undefined' i content area
        
//         document.getElementById('content-textarea') = data.content.value;


//     } catch (message) {
//         throw new Error(message);
//     }
// }

// function updatePunEvent() {
//     let urlParams = new URLSearchParams(window.location.search);
    
//     let form = document.getElementById('update-post-form');
//     form.addEventListener('submit', async function (e) {
//         e.preventDefault();
        
//         let formData = new FormData(this);
//         let object = {
//             content: formData.get('content')
//         }
//         console.log(object);
//         console.log(JSON.stringify(object));
        
//         try {
//             await fetch('http://localhost:3000/posts/' + urlParams.get('id'), {
//                 method: 'PATCH', // GET, POST, PATCH, DELETE
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(object) // body data type must match "Content-Type" header
//             });

//             window.location.replace('manage-posts.html') // redirects to the index.html page
//         } catch (message) {
//             throw new Error(message);
//         }
//     });
// }
// }


window.onload = function () {
    
    // **** GET POST *****

    let authorArea  = document.getElementById("author-textarea");
    let titleArea   = document.getElementById("title-textarea");
    let textArea    = document.getElementById("content-textarea");
    let urlParams   = new URLSearchParams(window.location.search);

    preFillForm()

    async function preFillForm() {


        try {
            let response = await fetch('http://localhost:3000/posts/' + urlParams.get('id'), {
                method: 'GET', // GET, POST, PATCH, DELETE
            })
            let data = await response.json();


            // This takes the value of 'content', 'title', 'author' and puts in the text-fields
            titleArea.innerHTML = data.title;
            authorArea.innerHTML = data.author;
            textArea.innerHTML  = data.content;
            
            console.log(data.title);
            console.log(data.author);
            console.log(data.content);

        }
        catch (message) {
            throw new Error(message)
        }
    }


    // **** UPDATE POST ****



}