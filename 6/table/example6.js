let igraci = [
    {ime: "Stefan", bodovi: 50},
    {ime: "Gorica", bodovi: 80},
    {ime: "Milica", bodovi: 30},
    {ime: "Elmir", bodovi: 43},
    {ime: "Amar", bodovi: 65},
    {ime: "Lejla", bodovi: 90},
    {ime: "Adnan", bodovi: 55},
    {ime: "Sara", bodovi: 72},
    {ime: "Haris", bodovi: 40},
    {ime: "Amina", bodovi: 88},
    {ime: "Tarik", bodovi: 25},
    {ime: "Emina", bodovi: 60},
    {ime: "Benjamin", bodovi: 77},
    {ime: "Jasmin", bodovi: 35},
    {ime: "Selma", bodovi: 95}
];

function prikaziIgrace() {
    const tableHtmlElement = document.getElementById("tabla");
    tableHtmlElement.innerHTML = `
        <thead>
          <tr>
            <th>
              <div class="header-contents">
                <span>Igrač</span>
                <span class="sort-controls">
                    <span class="sort-arrow" onclick="sortirajPoImenuAsc()">▲</span>
                    <span class="sort-arrow" onclick="sortirajPoImenuDesc()">▼</span>
                </span>
               </div>
      
            </th>
            <th>
              <div class="header-contents">
                <span>Bodovi</span>
                <span class="sort-controls">
                    <span class="sort-arrow" onclick="sortirajPoBodovimaAsc()">▲</span>
                    <span class="sort-arrow" onclick="sortirajPoBodovimaDesc()">▼</span>
                </span>
               </div>
            </th>
          </tr>
        </thead>    
        <tbody id="tijelo">
        </tbody>    
    `;
    const tBody = document.getElementById("tijelo");
    igraci.forEach(igrac => {
            tBody.innerHTML = tBody.innerHTML + `
                  <tr>
                    <td>${igrac.ime}</td>
                    <td>${igrac.bodovi}</td>
                  </tr>
                `;
        }
    );
}

function sortirajPoBodovimaAsc() {
    igraci.sort((igrac1, igrac2) => igrac2.bodovi - igrac1.bodovi);
    prikaziIgrace();
}

function sortirajPoBodovimaDesc() {
    igraci.sort((igrac1, igrac2) => igrac1.bodovi - igrac2.bodovi);
    prikaziIgrace();
}

function sortirajPoImenuAsc() {
    igraci.sort((igrac1, igrac2) => igrac2.ime.localeCompare(igrac1.ime));
    prikaziIgrace();
}

function sortirajPoImenuDesc() {
    igraci.sort((igrac1, igrac2) => igrac1.ime.localeCompare(igrac2.ime));
    prikaziIgrace();
}

prikaziIgrace();