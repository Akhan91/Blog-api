window.onload = function(){
    fetchAllBlogs();
    
}



// Fetch request for all blog posts
async function fetchAllBlogs(){

    try{
        let response = await fetch('http://localhost:3000/posts')
        let data = await response.json();


        let manageHTML = '';
        let table = document.getElementById('tableBody');
        for (let posts of data.reverse()){
            
            let postsDate = new Date(posts.date)
           manageHTML +=  `<tr>
           <td><p>${posts.title}</p></td>
           <td><p>${posts.author}</p></td>
           <td><p>${postsDate.getFullYear()}-${postsDate.getMonth()}-${postsDate.getDate()}</p></td>
           <td class="actionTD"><a href="update-post.html?id=${posts['_id']}">Update</a><br></br><a class="delete-btn" href=#>Delete</a></td>
           </tr>`
        }
        table.innerHTML = manageHTML;
        
    }
    catch(message) {
        throw new Error(message);
    }

     deleteEvent();
}


async function deleteEvent() {
    let deleteBtns = document.getElementsByClassName('delete-btn');
    for (let deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click', async function(e) {
            e.preventDefault()

            let postId = this.dataset.id
            console.log(postId);

            try {
                await fetch('http://localhost:3000/posts' + postId, {
                    method: 'DELETE', // GET, POST, PATCH, DELETE
                });

                this.parentNode.parentNode.remove();
            } catch (message) {
                throw new Error(message);
            }
        
        })
    }
}