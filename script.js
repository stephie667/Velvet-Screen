function filterMovies() {
    // Get the value from the search bar and turn it to lowercase
    let input = document.getElementById('movieSearch').value.toLowerCase();

    //  Get all the movie cards
    let cards = document.getElementsByClassName('explore-card');

    // Loop through every card to check the title
    for (let i = 0; i < cards.length; i++) {
        // Find the <h3> tag inside the current card
        let titleTag = cards[i].querySelector('h3');

        if (titleTag) {
            let titleText = titleTag.innerText.toLowerCase();

            // If the title matches the input, show it. Otherwise, hide it.
            if (titleText.includes(input)) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}

function handleSignUp() {
    const signUpForm = document.getElementById('form-id');
    const container = document.querySelector('.sign-container');

  