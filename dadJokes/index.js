const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

generateJoke(); // Calling the function

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await fetch('https://icanhazdadjoke.com', config); // Await the fetch operation

    if (!res.ok) {
      throw new Error('Failed to fetch joke');
    }

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
  } catch (error) {
    console.error('Error fetching joke:', error.message);
  }
}
//! generateJoke();

// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   const res = fetch('https://icanhazdadjoke.com', config);

//   const data = await res.json();

//   jokeEl.innerHTML = data.joke;
// } why this is not working like the commented one
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
