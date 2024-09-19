
class Alien {
  constructor(name, description, image) {
    this.name = name
    this.description = description
    this.image = image
  }
  displayInfo() {
    console.log(`Nome: ${this.name}`)
    console.log(`Descrição: ${this.description}`)
    console.log(`Imagem: ${this.image}`)
  }
}
class FourArms extends Alien {
  constructor(name, description, image) {
    super(name, description, image)
    this.ability = 'Quatro braços poderosos'
  }
  displayInfo() {
    super.displayInfo()
    console.log(`Habilidade: ${this.ability}`)
  }
}
class Heatblast extends Alien {
  constructor(name, description, image) {
    super(name, description, image)
    this.ability = 'Manipulação de fogo'
  }
  displayInfo() {
    super.displayInfo()
    console.log(`Habilidade: ${this.ability}`)
  }
}
class AlienSelector {
  constructor() {
    this.alienForm = document.getElementById('alien-form')
    this.alienInfo = document.getElementById('alien-info')
    this.aliens = [
      new Alien('Quatro Braços', 'Quatro braços poderosos.', 'fourarms.png'),
      new Alien('Chama', 'Manipulação de fogo.', 'heatblast.png'),
      new Alien('Diamante', 'Corpo de diamante.', 'diamondhead.png'),
      new Alien('Lobisben', 'Um lobo mutante.', 'wildmutt.png'),
      new Alien('Massa Cinzenta', 'Super inteligência e pequeno tamanho.', 'greymatter.png'),
    ]
    
        
    this.alienForm.addEventListener('submit', this.handleAlienSelection.bind(this))
    document.getElementById('alien-number').addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.handleAlienSelection(event)
      }
    })
  }
  handleAlienSelection(event) {
    event.preventDefault();
    const alienNumber = parseInt(document.getElementById('alien-number').value)
    if (alienNumber >= 1 && alienNumber < this.aliens.length) {
      const alien = this.aliens[alienNumber - 1]
      this.alienInfo.innerHTML = `
        <img src="${alien.getImage()}" alt="${alien.getName()}">
        <h2>${alien.getName()}</h2>
        <p>${alien.getDescription()}</p>
        <p>Habilidade: ${alien.getAbility()}</p>
      `
    } else {
      this.alienInfo.innerHTML = '<p>Número de alien inválido. Tente novamente.</p>'
    }
  }
}
const alienSelector = new AlienSelector()