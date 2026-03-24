let index = 0;

let slike = ["picture1.jpg?text=1", "picture2.jpg?text=2", "picture3.jpg?text=3"];

function next(){
    index = index + 1;
    if(index>(slike.length-1)){
        index = 0;
    }
    document.getElementById("slika").src = `images/${slike[index]}`;
}

function previous(){
    index = index - 1; // -1
    if(index<0){
        index = slike.length-1;
    }
    document.getElementById("slika").src = `images/${slike[index]}`;
}