let userText = document.querySelector("[name=text]");

let textValue = document.querySelector("[name=textValue]");
let userColor = document.querySelector("[name=textColor]");
let userSize = document.querySelector("[name=textSize]");
let userSizeUnit = document.querySelector("[name=textSizeUnit]");
let userFace = document.querySelector("[name=textFace]");

textValue.addEventListener(
    "input", 
    ()=>{
        userText.innerHTML = textValue.value;
    }
)

userColor.addEventListener(
    "input", 
    ()=>{
        userText.style.color = userColor.value;
    }
)

userSize.addEventListener(
    "input", 
    ()=>{

        userText.style["font-size"] = userSize.value + userSizeUnit.value;
    }
)

userSizeUnit.addEventListener(
    "change", 
    ()=>{

        userText.style["font-size"] = userSize.value + userSizeUnit.value;
    }
)

userFace.addEventListener(
    "change", 
    ()=>{

        userText.style["font-family"] = userFace.value;
    }
)

