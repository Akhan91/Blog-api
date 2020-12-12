window.onload = function(){
    fetchAllBlogs();
}

// Fetch request for all blog posts
async function fetchAllBlogs(){

    try{
        let response = await fetch('https://puns-app.herokuapp.com/puns')
        let data = await response.json();


        let manageHTML = '';
        let table = document.getElementById('tableBody');
        for( let posts of data){
            
            let postsDate = new Date(posts.date)
           manageHTML +=  `<tr>
           <td><p>${posts.title}</p></td>
           <td><p>${posts.author}</p></td>
           <td><p>${postsDate.getFullYear()}-${postsDate.getMonth()}-${postsDate.getDate()}</p></td>
           <td class="actionTD"><a href="update-post.html">Update</a><br></br><a href=#>Delete</a></td>
           </tr>`
        }
        table.innerHTML = manageHTML;


    }
    catch(message) {
        throw new Error(message);
    }
}