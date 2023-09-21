let synth = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();

let select = document.querySelector("select");
let form = document.querySelector("form");
let inputText = document.querySelector("textarea");

function populateVoices(voices) {
  voices.forEach((voice, index) => {
    select.options[index] = new Option(voice.name, index);
  });
}

speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();

  synth.voice = voices[select.value];
  populateVoices(voices);
};

select.addEventListener("change", function (e) {
  synth.voice = voices[select.value];
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  synth.text = inputText.value;
  window.speechSynthesis.speak(synth);
});
