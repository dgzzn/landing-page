

function teste() {
    localStorage.setItem('email', document.getElementById("email").value);
    console.log(localStorage.getItem('email'))

    document.getElementById("agradecimento").innerHTML = 
        `<h1 class="display-3">Muito obrigado!</h1>
        <p class="lead">Você receberá notícias sobre atualizações em <b> ${localStorage.getItem('email')}</b></p>
        <hr class="my-2">
        <p></p>
        </p>

        `
}