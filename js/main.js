// creo array con oggetti e info forniti
team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

// ***********For each Test********************
team.forEach((element) => {
  teamMember = element;
  const contentElement = document.getElementById("row-container");
  let contentHtml = `<div class="col-4">`;
  contentHtml += `<div class="card w-50" style="width: 18rem;">`;
  contentHtml += `<img src="./img/${teamMember.foto}" alt="${teamMember.nome}" />`;
  contentHtml += `<div class="card-body">`;
  contentHtml += `<h5 id="nome" class="card-title">${teamMember.nome}</h5>`;
  contentHtml += `<p id="ruolo" class="card-text">${teamMember.ruolo}</p>`;
  contentHtml += `</div>`;
  contentHtml += `</div>`;
  contentHtml += `</div>`;
  contentElement.innerHTML += contentHtml;
});
