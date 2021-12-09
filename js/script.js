// Ciao ragazzi,
//   esercizio di oggi: Our Team
// nome repo: js - our - team
// In allegato trovate un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.

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



// BONUS:
// Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

// richiamo funzione per stampare le card

printCards(team, teamContainer);

// seleziono gli elementi del dom

let nameUser = document.getElementById('name');
let roleUser = document.getElementById('role');
let imageUser = document.getElementById('image');
let addMember = document.getElementById('addMemberButton');

// al click del bottone

addMember.addEventListener('click', function() {
  // seleziono i valori del form
  let selectedName = nameUser.value;
  let selectedRole = roleUser.value;

  // usare path img
  let selectedImage = imageUser.value;

  // variabile dei valori selezionati

  let object  = {
    name: selectedName,
    role: selectedRole,
    image: selectedImage,

  }

  // inserisco valori in array
  team.push(object);
  console.log(team);
  printCards(team, teamContainer);
})

