function calcularIdade() {
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = dataNascimento.getMonth();

    if (dataNascimento > hoje) {
        alert("A data de nascimento não pode ser no futuro.");
        return;
      }

    else if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    document.getElementById('resultado').textContent = `Você tem ${idade} anos.`;
}