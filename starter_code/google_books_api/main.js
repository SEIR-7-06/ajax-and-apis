const url = 'https://www.googleapis.com/books/v1/volumes?q=';
const options = '&maxResults=15';

$('#book-form').on('submit', function(event) {
  event.preventDefault();
  // - Get the input value
  const searchTerm = $('#search-term').val();
  const endPoint = `${url}${searchTerm}${options}`;

  console.log(endPoint);
  // - Make a request to the books DB
  fetch(endPoint)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);

      data.items.forEach((item) => {
        const bookInfo = item.volumeInfo;

        const bookTemplate = (
          `<li>
            <h2>${bookInfo.title}</h2>
            <p>${bookInfo.description}</p>
            <img src=${bookInfo.imageLinks.thumbnail} />
            <a href="${bookInfo.previewLink}" target="_blank">
              View the Book
            </a>
          </li>`
        );

        $('.books').append(bookTemplate);
      });
    });


  // - Pull out the response body
  // - Render books data on the page
});
