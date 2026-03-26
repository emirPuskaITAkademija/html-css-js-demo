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
            <th>Igrač</th>
            <th>Bodovi</th>
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

function sortirajIgrace() {
    //Comparable -> compareTo
    // prvi veći od drugog >0 : prvi ide prije drugog
    //prvi manji od drugog <0 : drugi ide prije prvog
    // prvi jednak drugom =0 : ostaju gdje jesu

    // igraci.sort((prvi, drugi)=>{
    //     if(prvi.bodovi>drugi.bodovi){
    //         return -1;
    //     }
    //     if(prvi.bodovi<drugi.bodovi){
    //         return 1;
    //     }
    //     return 0;
    // });

    // igraci.sort((p, d) => p.bodovi - d.bodovi);

    igraci.sort(sort)

    //igraci -> JavaScript NIZ Array
    // ugrađena funkcija sort
    // da bi ta funkcija radila morate definirati po čemu će se raditi sortiranje
    // => ARROW function je kreirala objekat ili
    //definirala blok koda na osnovu kojeg će se raditi sortiranje
    prikaziIgrace();
}

function sort(igrac1, igrac2){
    if(igrac1.bodovi>igrac2.bodovi){
        return -1;
    }
    if(igrac1.bodovi<igrac2.bodovi){
        return 1;
    }
    return 0;
}

prikaziIgrace();