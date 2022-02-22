let level = 0;

function myF(e) { 
    let str="";
    for (let i = 0; i<level; i++){
        str += "   ";
    }
    console.log(str + Object.prototype.toString.call(e)); 
}

function attraversa(elem, myF) {
    myF(elem);
    level++;
    for(let figlio of elem.children) { 
        attraversa(figlio, myF);
    }
    level--;
}

function analizza() {
  let b = document.querySelector("body");  
  attraversa(b, myF);
}   