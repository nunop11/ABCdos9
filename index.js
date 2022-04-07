function submit() {
    const text = document.getElementById("inputtxt").value
    var textCut = text.split('')
    if (document.getElementById("headBox").style.height="100vh") {
        setTimeout(function(){
            getImages(textCut)
        }, 500);
    } else {
        getImages(textCut)
    }
    
}


function fit() {
    document.getElementById("headBox").style.height="25vh"
}

function getImages(txtcut) {
    let test = document.getElementById("imagesOut")
    test.innerHTML=""
    for (let i = 0; i < txtcut.length; i++) {
        let text = txtcut[i]
        if (typeof text == "string") {text = text.toUpperCase()}
        if (txtcut[i]==" ") {
            test.innerHTML+=`<div><img src="https://nunop11.github.io/ABCdos9/fotos/space.png" alt=""></img></div>`
        } else {
            test.innerHTML+=`<div><img src="https://nunop11.github.io/ABCdos9/fotos/${text}.png" alt=""></img></div>`
        }
    }
}