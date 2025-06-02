const quotes = [
  "Be yourself; everyone else is already taken.",
  "You miss 100% of the shots you don’t take.",
  "Whether you think you can or you think you can’t, you’re right.",
  "Do what you can, with what you have, where you are.",
  "Hard work beats talent when talent doesn't work hard."
];

let currentQuote = "";

function getNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];
  document.getElementById("quote").textContent = currentQuote;
}

function bookmarkQuote() {
  if (!currentQuote) return;

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  if (!bookmarks.includes(currentQuote)) {
    bookmarks.push(currentQuote);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    showBookmarks();
  }
}

function showBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  let list = document.getElementById("bookmarks");
  list.innerHTML = "";

  bookmarks.forEach(q => {
    let li = document.createElement("li");
    li.textContent = q;
    list.appendChild(li);
  });
}

window.onload = () => {
  getNewQuote();
  showBookmarks();
};
