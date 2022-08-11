const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const containerEl = document.querySelector(".container")
const articleEl = document.querySelector("article")
let numPosts = 0

for (let i = 0; i< posts.length; i++){
    numPosts++
    addPost(posts[i])
}

function addPost(arr){
    if ('content' in document.createElement('template')) {
        const template = document.querySelector("template").content
        template.querySelector("article").id = `post-${numPosts}`
        template.querySelector(".post-header").getElementsByClassName("avatar")[0].src = arr.avatar
        template.querySelector("#post-user-name").textContent = arr.name
        template.querySelector("#post-user-location").textContent = arr.location
        template.querySelector(".main-img").src = arr.post
        template.querySelector("#likes-num").textContent = arr.likes
        template.querySelector(".comment").innerHTML = `<span class="bold">${arr.username}</span> ${arr.comment}`
        template.querySelector(".action-like").setAttribute("onclick","addLike('post-" + numPosts +"')")
        console.log( template.querySelector(".action-like").getAttribute('onclick'))

        const targetContainer = document.getElementsByClassName("container")[0]
        targetContainer.appendChild(document.importNode(template,true))
    }
    else{
        console.log("Cannot support HTML template elements")
    }
}
function addLike(clicker){
    const article = document.getElementById(clicker)
    const likes = article.querySelector("#likes-num")
    let likesNum = Number(likes.textContent) + 1
    likes.textContent = likesNum
}
