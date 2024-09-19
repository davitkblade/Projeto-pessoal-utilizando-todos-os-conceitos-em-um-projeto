const alienForm = document.getElementById('alien-form')
//Seleciona o elemento HTML com o ID 'alien-form' e armazena na variável 'alienForm'.
const alienInfo = document.getElementById('alien-info')

// Cria um array chamado 'aliens' com informações sobre cada alienígena.
const aliens = [
  { name: 'Chama', description: 'Chama é a amostra de DNA do Omnitrix de um Pyronita da estrela Pyros.' }, 
  { name: 'Besta', description: 'Besta é a amostra de DNA do Omnitrix de um Vulpimancer do planeta Vulpin.' },
  { name: 'Diamante', description: 'Diamante é a amostra de DNA do Omnitrix de um Petrosapien do planeta Petropia.' },
  { name: 'XRL8', description: 'XLR8 é a amostra de DNA do Omnitrix de um Kinecelerano do planeta Kinet.' },
  { name: 'Massa Cinzenta', description: 'Massa Cinzenta é a amostra de DNA do Omnitrix de um Galvaniano do planeta Galvan Prime.' },
  { name: 'Quatro Braços', description: 'Quatro Braços é a amostra de DNA do Omnitrix de um Tetramando do planeta Khoros.' },
  { name: 'Insectóide', description: 'Insectóide é a amostra de DNA do Omnitrix de um Lepidopterrano do planeta Lepidopterra.' },
  { name: 'Aquático', description: 'Aquático é a amostra de DNA do Omnitrix de um Pisccis volann do planeta Picciss.' },
  { name: 'Ultra-T', description: 'Ultra T é a amostra de DNA do Omnitrix de um Mecamorfo galvânico da lua Galvan B.' },
  { name: 'Fantasmático', description: 'Fantasmático é a amostra de DNA do Omnitrix de um Ectonurita do planeta Anur Phaetos.' },
]
// Cria um array chamado 'alienUrls' com os URLs de cada alienígena.
const alienUrls = [
  "./src/all.html/chama.html",
  "./src/all.html/besta.html",
  "./src/all.html/diamante.html",
  "./src/all.html/quatro.html",
  "./src/all.html/insectoide.html",
  "./src/all.html/xrl8.html",
  "./src/all.html/aquático.html",
  "./src/all.html/massa.html",
  "./src/all.html/ultra.html",
  "./src/all.html/fantasmatico.html",
]

// Define a função 'handleAlienSelection' que é chamada quando o usuário seleciona um alienígena.
function handleAlienSelection(event) {
  const alienNumber = parseInt(document.getElementById('alien-number').value); // Obtem o valor do campo de entrada 'alien-number' e converte para um inteiro.
  if (alienNumber >= 1 && alienNumber <= alienUrls.length) { // Verifica se o número do alienígena é válido (entre 1 e o tamanho do array 'alienUrls').
    const url = alienUrls[alienNumber - 1] // Obtém o URL do alienígena correspondente ao número selecionado.
    window.location.href = url // Redireciona o usuário para o URL do alienígena selecionado.
  } else {
    alert("Número inválido. Digite um número entre 1 e " + alienUrls.length) // Exibe uma mensagem de alerta caso o número do alienígena seja inválido.
  }
}