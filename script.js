// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById('joke-btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

// Add an event listener to the button
jokeBtn.addEventListener('click', function() {
  console.log('Getting a joke...');
  
  // Fetch a random programming joke from the Official Joke API
  fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(function(response) {
      // Parse the response as JSON
      return response.json();
    })
    .then(function(data) {
      // Log the data to see what we're getting
      console.log(data);
      
      // Check if data is an array (some endpoints return an array)
      const joke = Array.isArray(data) ? data[0] : data;
      
      // Display the joke on the page
      setup.textContent = joke.setup;
      punchline.textContent = joke.punchline;
    })
    .catch(function(error) {
      // Log any errors that occur
      console.log('Error fetching joke:', error);
    });
});