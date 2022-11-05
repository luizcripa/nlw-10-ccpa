function createGame(hour,teamOne,teamTwo){
  return`
    <li>
      <img src="./assets/icon-${teamOne}.svg" alt="Bandeira do ${teamOne}"/>
            <strong>${hour}</strong>
            <img src="./assets/icon-${teamTwo}.svg" alt="Bandeira da ${teamTwo}"/>
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games){
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2> ${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
`
}

document.querySelector("#cards").innerHTML= 
  createCard("22/11","QUINTA",
    createGame("16:00","brazil","coreia-sul") + 
    createGame("16:00","brazil","coreia-sul")
  ) +
  
  createCard("22/11","QUINTA",
    createGame("16:00","servia","ghana")) +
  
  createCard("22/11","QUINTA",
    createGame("16:00","servia","ghana") + 
    createGame("16:00","brazil","coreia-sul")
  )