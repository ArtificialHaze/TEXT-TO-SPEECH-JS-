const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const textAreaElement = document.getElementById("text").value;
  let speech = new SpeechSynthesisUtterance();
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1;
  speech.text = textAreaElement;

  window.speechSynthesis.speak(speech);
});
