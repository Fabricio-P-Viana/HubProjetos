function atualizarInformacoes() {
    // Obter a data atual
    var dataAtual = new Date();

    // Extrair hora, minutos, dia e mês
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var dia = dataAtual.getDate();
    var mesNumero = dataAtual.getMonth(); // Mês como número (começa do zero)

    // Array com os nomes dos meses
    var nomesDosMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    // Formatando para exibir sempre com dois dígitos
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    dia = dia < 10 ? '0' + dia : dia;

    // Obtendo o nome do mês a partir do array
    var mesNome = nomesDosMeses[mesNumero];

    // Criar a string de informação
    var infoHoraString = hora + ':' + minutos;
    var infoDiaMesString = dia + ' de ' + mesNome;

    // Inserir a informação na div com id "info"
    document.getElementById('mes-dia').innerText = infoDiaMesString;
    document.getElementById('Hora').innerText = infoHoraString;
    document.getElementById('mes-dia2').innerText = infoDiaMesString;
    document.getElementById('Hora2').innerText = infoHoraString;
}

// Chamar a função inicialmente para exibir as informações na página
atualizarInformacoes();

// Atualizar as informações a cada minuto (60000 milissegundos)
setInterval(atualizarInformacoes, 60000);