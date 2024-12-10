function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destino = document.getElementById('destino').value;
    const mensagem = document.getElementById('mensagem').value;

    // Salva os dados no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('destino', destino);
    localStorage.setItem('mensagem', mensagem);

    alert(`Obrigado, ${name}! Sua mensagem sobre ${destino} foi enviada com sucesso.`);
    document.getElementById('contactForm').reset();
}

// Função para voltar ao topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}