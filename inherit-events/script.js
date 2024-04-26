let form = document.getElementById("form"); // Grab the form element from the html file
form.addEventListener("submit", (event) => {
    event.preventDefault(); // preventDefault to prevent the form from refreshing our page
    console.log(event);

    console.log(event.target.title.value);
    console.log(event.target.body.value);
    console.log(event.target.userId.value);

    // Grabbing the values from the input elements inside our form
    const titleValue = event.target.title.value;
    const bodyValue = event.target.body.value;
    const userId = event.target.userId.value;

    // Constructing our body object to send to the api server. This will make more sense in the future
    const data = {
        title: titleValue,
        body: bodyValue,
        userId: parseInt(userId)
    }

    // Sending data to a specific api link.
    fetch('https://jsonplaceholder.typicode.com/posts', { // This object we will talk about in the future
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    // Handle the response of the data
    .then((response) => response.json())
    .then((json) => console.log(json));
})