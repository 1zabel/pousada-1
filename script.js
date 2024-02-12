document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtendo os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;

    // Validando os campos do formulário
    if (name.trim() === '' || email.trim() === '' || checkin.trim() === '' || checkout.trim() === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    // Simulação do processamento da reserva
    // Aqui você pode adicionar a lógica para armazenar os dados da reserva em um banco de dados,
    // enviar um e-mail de confirmação, etc.

    // Exemplo de mensagem de confirmação
    alert('Obrigado por sua reserva, ' + name + '! Verificaremos sua disponibilidade para ' + checkin + ' a ' + checkout + '.');

    // Limpar o formulário após a submissão bem-sucedida
    document.getElementById('reservation-form').reset();
});