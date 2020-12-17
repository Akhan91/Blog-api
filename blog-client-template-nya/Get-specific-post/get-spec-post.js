window.onload = function() { // Waits for the HTML document to completely load, before running the function
    fetchSpecificPost();

    async function fetchSpecificPost() {
        let urlParams   = new URLSearchParams(window.location.search);
        try {
            let response    = await fetch('http://localhost:3000/posts/' + urlParams.get('id'));
            let data        = await response.json();
            var postsHTML   = '';
            
            // Title of posts + post content
            postsHTML +=`
                <br>
                <h1>${data.title}</h1>
                <br>
                <p><strong><i>${data.content}</p></strong></i>`;

                // Author + Date
                let postsDate = new Date(data.date);
                postsHTML += `
                <br>
                <p><span>Author: ${data.author}</span></p>
                <p><span>Date: ${postsDate.getFullYear()}-${postsDate.getMonth()}-${postsDate.getDate()}</span></p>
                <br>
                <span class = "bottom-border"></h2>`; // Dotted line element from CSS
                document.getElementById('post-list').innerHTML = postsHTML;
                
                
        }catch (message) {
            throw new Error(message);
        }    
    }
}