function chiamata(){
    let d=document.getElementsByTagName("body")[0]
    let a=d.getAttribute("onload")
    alert("ciao")
    alert(a)
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    table.appendChild(thead)
    table.appendChild(tbody)
    document.getElementsByTagName("body")[0].appendChild(table)
    for (i=0; i<8; i++){
        let row=document.createElement('tr')
        for (k=0; k<8; k++){
        let eltab=document.createElement('td')
        let eltext=document.createTextNode('TESTINA')
        eltab.appendChild(eltext)
        row.appendChild(eltab)
        }
        tbody.appendChild(row)
    }
    document.getElementsByTagName("body")[0].appendChild(table)
}   