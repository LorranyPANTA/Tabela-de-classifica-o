function adicionarJogador() {
    var novoJogador = document.getElementById("adicionarJogador").value;
    if (novoJogador != "") {
      newPlayer = {
        nome: novoJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
      };
      jogadores.push(newPlayer);
      exibeJogadoresNaTela(jogadores);
      document.getElementById("adicionarJogador").value = "";
    } else {
      var vazio = document.getElementById("naTela");
      vazio.innerHTML = "O nome não pode ser vazio!";
      vazio.value = "";
    }
  }
  
  function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
  }
  
  var jogadores = [];
  
  function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
      elemento += "<tr><td>" + jogadores[i].nome + "</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitoria</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  exibeJogadoresNaTela(jogadores);
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarEmpate(i) {
    for (var i = 0; i < jogadores.length; i++) {
      var jogador = jogadores[i];
      jogador.empates++;
      jogador.pontos = calculaPontos(jogador);
      exibeJogadoresNaTela(jogadores);
    }
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function resetJogo(i) {
    for (var i = 0; i < jogadores.length; i++) {
      var jogador = jogadores[i];
      jogador.vitorias = 0;
      jogador.empates = 0;
      jogador.derrotas = 0;
      jogador.pontos = 0;
    }
    exibeJogadoresNaTela(jogadores);
  }
  
  function removerJogador() {
    for (var i = 0; jogadores.length != 0; i++) {
      var removerJogador = jogadores.splice(0, i);
    }
    var removerJogador = jogadores.splice(0, i);
    exibeJogadoresNaTela(jogadores);
  }
  