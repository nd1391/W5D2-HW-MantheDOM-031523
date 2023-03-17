let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const myTitle = document.querySelector('#main-title');
myTitle.innerHTML = '<h1>NEVA KNOCKED</h1>'

  // Part 2
const bodyEl = document.querySelector('body')
bodyEl.style.backgroundColor = 'teal';


  // Part 3
const favThings = document.querySelector('#favorite-things')
favThings.removeChild(favThings.lastElementChild);

  // Part 4
const specTitles = document.querySelectorAll(".special-title")
for (const titles of specTitles) {
  titles.style.fontSize = '2rem';
}

  // Part 5
const pastRaces = document.getElementById("past-races")
var chiTown = pastRaces.children[3];
pastRaces.removeChild(chiTown);


  // Part 6
const newLi = document.createElement('li');
newLi.textContent = 'Nu Yawk'
pastRaces.appendChild(newLi);

  // Part 7
const newBlogPost = document.createElement('div');
newBlogPost.classList.add('blog-post')

const newHeading = document.createElement('h1')
newHeading.textContent = "Nuw Yawk"

const newP = document.createElement('p');
newP.textContent = "Took a bite outta dat Big Apple!"

newBlogPost.appendChild(newHeading);
newBlogPost.appendChild(newP);

var blogPostsSection = document.querySelector(".main");
blogPostsSection.appendChild(newBlogPost);

// const blogSection = document.querySelector('.blog-post purple')
// blogSection.insertBefore(newBlogPost, null);

// newBlogPost.insertBefore()

  // Part 8

const quote = document.querySelector('#quote-title')

quote.addEventListener('click', randomQuote)
  


  // Part 9

  const blogPosts = document.querySelectorAll('.blog-post');

  blogPosts.forEach(post => {
    post.addEventListener('mouseout', () => {
      post.classList.toggle('purple');
    });
  
    post.addEventListener('mouseenter', () => {
      post.classList.toggle('red');
    });
  });


});
