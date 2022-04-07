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
        if (txtcut[i]==" ") {
            test.innerHTML+=`<div><img src="C:/Users/nunop/VSCode/ABCdos9/fotos/space.png" alt=""></img></div>`
        } else {
            test.innerHTML+=`<div><img src="C:/Users/nunop/VSCode/ABCdos9/fotos/${txtcut[i]}.png" alt=""></img></div>`
        }
    }
}