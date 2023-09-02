function db(e){
    document.getElementById('inp').value += e
}

function eq(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clrall(){
    document.getElementById('inp').value = " "
}

function clr(){
    var a = document.getElementById('inp')
    a.value = a.value.slice(0,-1)
}
