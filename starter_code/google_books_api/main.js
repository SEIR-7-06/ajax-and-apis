const bookForm = document.getElementById('book-form');
const searchInput = document.getElementById('search-term');
const booksListEl = document.getElementById('books');

var googleBooksUrl = "https://www.googleapis.com/books/v1/volumes?q=";

bookForm.addEventListener('submit', function(event) {
	event.preventDefault();

	const searchTerm = searchInput.value;

	fetch(googleBooksUrl + searchTerm)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			var bookInfo = data.items[0].volumeInfo;

			var listItemHTML = `<li>
				<h2>${bookInfo.title}</h2>
				<p>${bookInfo.description}</p>
				<img src= ${bookInfo.imageLinks.thumbnail}>
				<a href= ${bookInfo.previewLink }>Preview Book</a>
			</li>`;

			booksListEl.innerHTML = listItemHTML;
		});
});
