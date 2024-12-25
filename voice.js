const startBtn = document.getElementById('start-btn');
const textOutput = document.getElementById('text-output');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

startBtn.addEventListener('click', () => {
    recognition.start();
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textOutput.value += transcript + ' ';
};

recognition.onerror = (event) => {
    console.error('Error occurred in recognition: ' + event.error);
};

