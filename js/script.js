const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// seleziono il container 

let teamContainer = document.querySelector('.team-container');

// funzione stampare le card

function printCards(array, container) {
  // vuoto il container
  container.innerHTML = '';

  // ciclo for per selezionare i dati
  for (let i = 0; i < array.length; i++) {

    // dichiaro gli elementi array
    let obj = array[i];


    // variabile template div card
    let templateDiv = `
    <div class="team-card">
      <div class="card-image">
        <img src="img/${obj.image}" alt="${obj.name}"/>
      </div>
      <div class="card-text">
          <h3>${obj.name}</h3>
          <p>${obj.role}</p>
      </div>
    </div>`;

    // stampo template nel dom
    container.innerHTML += templateDiv;
  }
}




