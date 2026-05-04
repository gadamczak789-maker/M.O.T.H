// -------- BOOT SCREEN --------
window.onload = () => {
    setTimeout(() => {
        document.getElementById("bootScreen").style.display = "none";
    }, 1500);
};

// -------- SOUND FILES (ONLY FILENAMES NEEDED NOW) --------
const soundFiles = [
    "ATTACK.mp3",
    "Applause.mp3",
    "Bad Choice.mp3",
    "Break My Stride - Matthew Wilder (192k).mp3",
    "Canada.mp3",
    "CrapDND.mp3",
    "Crickets.mp3",
    "Dial Up.mp3",
    "Dun Dun Dun.mp3",
    "Elevator.mp3",
    "Error.mp3",
    "Fail.mp3",
    "Get over here.mp3",
    "Goodbye.mp3",
    "HAIIIIII.mp3",
    "Hallway Ambience.mp3",
    "Hardware Store.mp3",
    "Healing.mp3",
    "Hello.mp3",
    "I pick the music.mp3",
    "I'm bored.mp3",
    "Metal Pipe Sound.mp3",
    "Moth.mp3",
    "MusicBox.mp3",
    "Pepsimann.mp3",
    "Reload.mp3",
    "Sad.mp3",
    "Sparks.mp3",
    "Squish.mp3",
    "That was a mistake.mp3",
    "Top-Gear.mp3",
    "Waves.mp3",
    "Windows power down.mp3",
    "You got it dude.mp3",
    "bird-sounds.mp3",
    "sound35.mp3",
    "sound36.mp3"
];

const container = document.getElementById("soundboard");
const stopButton = document.getElementById("stopAll");

let allAudio = [];

soundFiles.forEach(file => {
    const name = file.replace(".mp3", "");

    const button = document.createElement("div");
    button.className = "button";
    button.innerText = name;

    const audio = new Audio(`audio/${file}`);
    allAudio.push(audio);

    button.onclick = () => {
        audio.currentTime = 0;
        audio.play();
    };

    container.appendChild(button);
});

stopButton.onclick = () => {
    allAudio.forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
};

// -------- PAGE SWITCH --------
const pages = {
    soundboard: document.getElementById("soundboardPage"),
    tts: document.getElementById("ttsPage"),
    character: document.getElementById("characterPage")
};

function showPage(page) {
    Object.values(pages).forEach(p => p.classList.add("hidden"));
    pages[page].classList.remove("hidden");
}

document.getElementById("pageSoundboard").onclick = () => showPage("soundboard");
document.getElementById("pageTTS").onclick = () => showPage("tts");
document.getElementById("pageCharacter").onclick = () => showPage("character");

// -------- SPELL & SPEAK --------
const ttsGrid = document.getElementById("ttsGrid");
const ttsOutput = document.getElementById("ttsOutput");
const commonWordsDiv = document.getElementById("commonWords");

let currentText = "";

// COMMON WORDS (COMMUNICATION BOARD)
const commonWords = ["YES", "NO", "HELP", "STOP", "GO", "WAIT", "ATTACK", "RUN"];

commonWords.forEach(word => {
    const btn = document.createElement("div");
    btn.className = "button small";
    btn.innerText = word;

    btn.onclick = () => {
        currentText += " " + word;
        ttsOutput.innerText = currentText;
    };

    commonWordsDiv.appendChild(btn);
});

// ALPHABET
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ttsSounds = {};

alphabet.forEach(letter => {
    ttsSounds[letter] = new Audio(`audio-alphabet/${letter}.wav`);
});

alphabet.forEach(letter => {
    const key = document.createElement("div");
    key.className = "ttsKey";
    key.innerText = letter;

    key.onclick = () => {
        currentText += letter;
        ttsOutput.innerText = currentText;

        const audio = ttsSounds[letter];
        audio.currentTime = 0;
        audio.play();
    };

    ttsGrid.appendChild(key);
});

document.getElementById("backspace").onclick = () => {
    currentText = currentText.slice(0, -1);
    ttsOutput.innerText = currentText;
};

document.getElementById("clearText").onclick = () => {
    currentText = "";
    ttsOutput.innerText = "";
};
