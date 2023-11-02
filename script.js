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
if (voices.length > 0) {
  synth.voice = voices[0]; // Вы можете выбрать первый доступный голос или любой другой по умолчанию
  synth.lang = synth.voice.lang;
}
select.addEventListener("change", function (e) {
  synth.voice = voices[select.value];
  synth.lang = synth.voice.lang;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  synth.text = inputText.value;
  window.speechSynthesis.speak(synth);
});
