const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();
jokeBtn.addEventListener('click', generateJoke);

// using .then()
// function generateJoke() {
//     fetch('https://icanhazdadjoke.com/', {
//         headers: {
//             'Accept' : 'application/json'
//         }
//     }).then(res => res.json()).then(data => { jokeEL.innerHTML = data.joke })
// }


//using async/await
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }


    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json();

    jokeEL.innerHTML = data.joke;
}