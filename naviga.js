function naviga(id){
    let element = document.getElementsByTagName(id)[0]
    let a = element.childNodes
    let c = 0
    let r = null
    for (let e of a) {
        if (e.nodeType == 1) {
            c++;
            if (c == 3) {
                r = element.removeChild(e)
            }
            //alert(e.getAttribute('id'));
        }
    }
    element.appendChild(r)
}

function sortAlfabetico() {
	let body = document.getElementsByTagName('body')[0]
	let a = body.childNodes
	let b = {}
	let c = []
	for (let e of a) {
		if (e.nodeType == 1) {
			b[e.innerHTML] = e
			c.push(e.innerHTML)
			body.removeChild(e)
		}
	}
	c.sort();
	for (let k of c) {
		body.appendChild(b[k])
	}
	// alert(JSON.stringify(b));
	// alert(b['prima riga']);
}
