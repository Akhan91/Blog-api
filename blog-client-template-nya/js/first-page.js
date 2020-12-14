window.onload = function() { // Waits for the HTML document to completely load, before running the function
    fetchAllPosts();
}

// Get all posts, First page
async function fetchAllPosts() {
    
    try{
        let response = await fetch('http://localhost:3000/posts');
        // let response = await fetch('https://puns-app.herokuapp.com/puns');
        let data = await response.json();

        let bottomBorder = document.getElementsByClassName('bottom-border');
        
        let postsHTML = '';
        for (posts of data.reverse()) {
            console.log(posts)
            
            // Title of posts + post content
            postsHTML +=`
            <br>
            <h2>${posts.title}</h2>
            <br>
            <i>${posts.content}</i>
            <br>`;


            // Author + Date
            let postsDate = new Date(posts.date);
            postsHTML += `
            <br>
            <p><span>Author: ${posts.author}
            <br>${postsDate.getFullYear()}-${postsDate.getMonth()}-${postsDate.getDate()}</span></p>
            <br>
            <span class = "bottom-border"></h2>`; // Dotted line element from CSS
        }
        document.getElementById('post-list').innerHTML = postsHTML;
        
    }catch (message) {
        throw new Error(message);
    }
}