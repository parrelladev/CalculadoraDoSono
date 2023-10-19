function calcularSono() {
  const numCiclos = parseInt(document.getElementById('num1').value);
  if (!isNaN(numCiclos)) {
    const resultado = somarTempo(numCiclos);
    document.getElementById('resultado').textContent = `Se você for dormir agora, deve acordar às ${resultado}. Boa noite! 😴`;
  } 
  else {
    document.getElementById('resultado').textContent = 'Por favor, selecione um número válido.';
  }
}

function somarTempo(ciclos) {
  const agora = new Date();
  const alarme = ciclos * 90;
  const horaDeAcordar = new Date(agora.getTime() + alarme * 60000);
  return horaDeAcordar.toLocaleTimeString('pt-BR');
}

function mostrarInstrucoes() {
  alert("Para uma boa noite de sono, calcule o tempo de sono em ciclos de 90 minutos e acorde ao final do último ciclo. Adultos geralmente precisam de 4 a 6 desses ciclos, ou seja, 6 a 9 horas de sono por noite. Melhore a qualidade do sono mantendo o ambiente escuro, silencioso e livre de estímulos visuais.\n\nAs vantagens de usar ciclos para dormir incluem:\n\n■ Melhora a disposição ao acordar, pois o despertar ocorre no final de um ciclo, quando o sono é mais leve.\n■ Evita interrupções durante fases profundas do sono.\n■ Promove uma recuperação energética mais eficaz.");
  document.getElementById('resultado').textContent = instrucoes;
}

function limpar() {
  document.getElementById('num1').value = '';
  document.getElementById('resultado').textContent = '';
}

let modoNoturno = false;

function alternarModoNoturno() {
  const botaoModoNoturno = document.getElementById('modo-noturno');
  const body = document.body;

  if (modoNoturno) {
    body.classList.remove('modo-noturno');
    botaoModoNoturno.textContent = '🌚';
    // Trocar a imagem para o modo claro
    document.querySelector('.logo img').src = 'img/logo_calculadoraDoSono_v4.png';
  } else {
    body.classList.add('modo-noturno');
    botaoModoNoturno.textContent = '🌞';
    // Trocar a imagem para o modo noturno
    document.querySelector('.logo img').src = 'img/logo_calculadoraDoSono_modoEscuro.png';
  }

  modoNoturno = !modoNoturno;
}

