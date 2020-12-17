window.onload = function() { // Waits for the HTML document to completely load, before running the function
    fetchAllPosts();
}

// Get all posts, First page
async function fetchAllPosts() {
    try{
        let response = await fetch('http://localhost:3000/posts');
        let data     = await response.json();

        var postsHTML = '';
        for (posts of data.reverse()) {
            // Title of posts + post content
            postsHTML +=`
            <br>
            <h2>${posts.title}</h2>
            <br>`
            
            // This function displays the post content, letting the content minimize and only display 100 first chars.
            minLetter();

            `<br>`;
            
            // Author + Date
            let postsDate = new Date(posts.date);
            postsHTML += `
            <br>
            <p><span>Author: ${posts.author}</span></p>
            <p><span>Date: ${postsDate.getFullYear()}-${postsDate.getMonth()}-${postsDate.getDate()}</span></p>
            <br>
            <span class = "bottom-border"></h2>`; // Dotted line element from CSS
        }
        document.getElementById('post-list').innerHTML = postsHTML;

    }catch (message) {
        throw new Error(message);
    }
    // Function which minimizes the string and only displays the first 100 chars of the posts.
    function minLetter() {
        if (posts['content'].length >= 100) {
            postsHTML += `<p><strong><i>${posts['content'].substring(0,100-3)}... <a href="Get-specific-post/Get-spec-post.html?id=${posts['_id']}">Read more</a></p></strong></i>`;
        } else {
            postsHTML += `<p><strong><i>${posts['content']}</p></strong></i>`;
        }
    }
}

