function calcularSono() {
  const numCiclos = parseInt(document.getElementById('num1').value);
  if (!isNaN(numCiclos)) {
    const resultado = somarTempo(numCiclos);
    document.getElementById('resultado').textContent = `Se você for dormir agora, deve acordar às ${resultado}. Boa noite! 😴`;

    // Pergunta ao usuário se deseja adicionar um alarme
    const adicionarAlarme = confirm('Deseja adicionar um alarme para este horário?');
    
    if (adicionarAlarme) {
      // Define a hora de acordar para abrir o aplicativo de alarme
      const horaDeAcordar = new Date();
      horaDeAcordar.setHours(parseInt(resultado.split(':')[0]));
      horaDeAcordar.setMinutes(parseInt(resultado.split(':')[1]));
      
      // Formate a hora de acordar em um formato que o aplicativo de alarme Android possa entender
      const horaFormatada = horaDeAcordar.toISOString().slice(0, 19).replace('T', ' ');
      
      // Abra o aplicativo de alarme com o horário pré-definido
      window.open(`intent:#Intent;action=android.intent.action.SET_ALARM;launchFlags=0x10000000;component=com.android.deskclock/.DeskClock;S.extra.alarm.HOUR=${horaDeAcordar.getHours()};S.extra.alarm.MINUTES=${horaDeAcordar.getMinutes()};end`);
    }
  } else {
    document.getElementById('resultado').textContent = 'Por favor, digite um número válido.';
  }
}

function somarTempo(ciclos) {
  const agora = new Date();
  const alarme = ciclos * 90;
  const horaDeAcordar = new Date(agora.getTime() + alarme * 60000);
  return horaDeAcordar.toLocaleTimeString('pt-BR');
}

function mostrarInstrucoes() {
  alert("A quantidade de ciclos de 90 minutos que se dorme é variável e depende da necessidade de cada pessoa, porém o segredo é permitir que cada ciclo se complete totalmente, acordando apenas no final deste.\n\nO ciclo de 90 minutos pode ser repetido tantas vezes quanto necessário, até que se consiga recuperar a energia gasta durante o dia.\n\nFique atento, pois o máximo de ciclos recomendados por especialistas são seis.");
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

