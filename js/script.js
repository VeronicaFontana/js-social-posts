

const totalDate = new Date();

const date = totalDate.toDateString();

let postid = 0;

const user = [
  {
    postId: postid++,
    firstname: "Phil",
    lastname: "Mangione",
    date: date,
    profilePic: "http://placebeard.it/640x480",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://fastly.picsum.photos/id/947/300/300.jpg?hmac=VpYao_OnwATUAts7GbCbODLrBDmvqeG6TScoaQ1g-oM",
    like: 80
  },
  {
    postId: postid++,
    firstname: "Paolo",
    lastname: "Rossi",
    date: date,
    profilePic: "http://placebeard.it/640x480",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://fastly.picsum.photos/id/395/300/300.jpg?hmac=bNoTNUbPM5V9l39XVyBAGaTgCPlbuwxUq5BWkrGT7CQ",
    like: 12
  },
  {
    postId: postid++,
    firstname: "Erica",
    lastname: "Meli",
    date: date,
    profilePic: "https://placekitten.com/200/300",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://fastly.picsum.photos/id/440/300/300.jpg?hmac=K9zKMAEdnvvajpmT-bhi-nHmL0RoJ66vjn5gVaChe3s",
    like: 29
  }
]

const post = document.querySelector(".post");

user.forEach((person) => {
  post.innerHTML += `
  <div class="post__header">
    <div class="post-meta">                    
      <div class="post-meta__icon">
        <img class="profile-pic" src=${person.profilePic} alt="Phil Mangione">                    
      </div>
      <div class="post-meta__data">
        <div class="post-meta__author">${person.firstname} ${person.lastname}</div>
        <div class="post-meta__time">${person.date}</div>
        </div>                    
      </div>
      </div>
      <div class="post__text">${person.text}</div>
      <div class="post__image">
        <img src=${person.img} alt="">
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
            </a>
          </div>
        <div class="likes__counter">
          Piace a <b id="like-counter-1" class="js-likes-counter">${person.like}</b> persone
        </div>
      </div> 
    </div>
  </div>   
  `
})