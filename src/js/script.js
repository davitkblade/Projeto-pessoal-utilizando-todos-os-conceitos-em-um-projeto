const alienForm = document.getElementById('alien-form')

const alienInfo = document.getElementById('alien-info')


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


function handleAlienSelection(event) {
  const alienNumber = parseInt(document.getElementById('alien-number').value)
  if (alienNumber >= 1 && alienNumber <= alienUrls.length) {
    const url = alienUrls[alienNumber - 1] .
    window.location.href = url 
  } else {
    alert("Número inválido. Digite um número entre 1 e " + alienUrls.length)
  }
}
