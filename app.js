// alert(10,101,011,10)

const textarea = document.querySelector("textarea"),
speechBtn = document.querySelector("select");
voiceList = document.querySelector("button");





function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance) // speak the speech / utterance
}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        textToSpeech(textarea.value);
    }
})