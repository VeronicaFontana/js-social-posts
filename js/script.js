
const totalDate = new Date();
const date = totalDate.toDateString();

let likeCounter = 10;

const user = [
  {
    id: 1,
    firstname: "Phil",
    lastname: "Mangione",
    date: date,
    profilePic: "http://placebeard.it/300x300",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://fastly.picsum.photos/id/947/300/300.jpg?hmac=VpYao_OnwATUAts7GbCbODLrBDmvqeG6TScoaQ1g-oM",
    like: likeCounter
  },
  {
    id: 1,
    firstname: "Paolo",
    lastname: "Rossi",
    date: date,
    profilePic: "http://placebeard.it/g/300/300",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://fastly.picsum.photos/id/395/300/300.jpg?hmac=bNoTNUbPM5V9l39XVyBAGaTgCPlbuwxUq5BWkrGT7CQ",
    like: likeCounter
  },
  {
    id: 1,
    firstname: "Erica",
    lastname: "Meli",
    date: date,
    profilePic: "https://placekitten.com/300/300",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://fastly.picsum.photos/id/440/300/300.jpg?hmac=K9zKMAEdnvvajpmT-bhi-nHmL0RoJ66vjn5gVaChe3s",
    like: likeCounter
  }
]


const container = document.querySelector("#container");

user.forEach((person) => {
  container.innerHTML += `
  <div class="post">
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
            Piace a <b id="like-counter-1" class="js-likes-counter">${likeCounter}</b> persone
          </div>
        </div> 
      </div>
    </div>
  </div>
  `

  const buttonLike = document.querySelector(".like-button");
  const likesCounter = document.querySelector(".likes__counter");

  buttonLike.addEventListener("click", function(){
    buttonLike.classList.toggle("like-button-color")
    likeCounter++;

    likesCounter.innerHTML = `
    Piace a <b id="like-counter-1" class="js-likes-counter">${likeCounter}</b> persone
    `
  })
})

  


  