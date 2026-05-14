function filterMovies() {
    // Get the value from the search bar and turn it to lowercase
    let input = document.getElementById('movieSearch').value.toLowerCase();

    //  Get all the movie cards
    let cards = document.getElementsByClassName('explore-card');

   
