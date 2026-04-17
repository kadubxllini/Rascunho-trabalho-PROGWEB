function fazerLogin(event) {
    
    event.preventDefault(); // corrige um erro que atualiza a página ao invés de carregar a nova página
    
    const user = document.getElementById('js-user').value;
    const senha = document.getElementById('js-senha').value;

    if (user === 'login' && senha === 'senha') {
        window.location.href = 'loja.html';

    } else {
        alert('E-mail ou senha inválidos');
    }

}