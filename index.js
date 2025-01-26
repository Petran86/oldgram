import { posts } from "./data.js"

const postsArray = posts
const postContent = document.getElementById("post-content")

for (let post of postsArray) {

    postContent.innerHTML += `
    <div class="post-content">
        <div class="user-info">
            <img src=${post.avatar} alt="" class="my-avatar"/>
            <div class="user-info-text">
                <p class="bold">${post.name}</p>
                <p>${post.location}</p>
            </div>
        </div>
        <img src=${post.post} class="post-img"/>
        <div class="post-body">
            <div class="post-icons">
            <button><img src="./images/icon-heart.png" /></button>
            <button><img src="./images/icon-comment.png" /></button>
            <button><img src="./images/icon-dm.png" /></button>
            </div>
            <p class="bold">${post.likes} likes</p>
            <p><span class="bold">${post.username}</span> ${post.comment}</p>
        </div>
    </div>
    `
}