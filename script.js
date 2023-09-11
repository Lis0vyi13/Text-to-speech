let synth = new SpeechSynthesisUtterance();
let select = document.querySelector("select");
let voices = speechSynthesis.getVoices();
let form = document.querySelector("form");
let inputText = document.querySelector("textarea");

function populateVoices(voices) {
  voices.forEach((voice, index) => {
    select.options[index] = new Option(voice.name, index);
  });
}

speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
  synth.voice = voices[select.value - 1];
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
