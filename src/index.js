const init = () => {

    const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID")   ;

    fetch(`http://127.0.0.1:3000/movies/${input.value}`)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
           return alert('Movie not found')
        }
    })
    .then(data => {
        
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        title.textContent = data.title
        summary.textContent = data.summary



    })



  });

}

document.addEventListener('DOMContentLoaded', init);