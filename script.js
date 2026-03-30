// -------- SOUNDBOARD --------
const sounds = [
    { name: "M.O.T.H", file: "audio/Moth.mp3" },
    { name: "Waving", file: "audio/Waves.mp3" },
    { name: "Boot-Up", file: "audio/Sparks.mp3" },
    { name: "Heals", file: "audio/Healing.mp3" },
    { name: "Top-Gear", file: "audio/Top-Gear.mp3" },
    { name: "Government", file: "audio/Canada.mp3" },

    { name: "Akward", file: "audio/Crickets.mp3" },
    { name: "Crap DND", file: "audio/CrapDND.mp3" },
    { name: "I pick the music", file: "audio/I pick the music.mp3" },
    { name: "Music Box", file: "audio/MusicBox.mp3" },
    { name: "Elevator", file: "audio/Elevator.mp3" },
    { name: "Boomstick", file: "audio/Reload.mp3" },

    { name: "Well that was Sad", file: "audio/Sad.mp3" },
    { name: "Hello", file: "audio/Hello.mp3" },
    { name: "Bored :|", file: "audio/I'm bored.mp3" },
    { name: "Haiiiiii", file: "audio/HAIIIIII.mp3" },
    { name: "You got it", file: "audio/You got it dude.mp3" },
    { name: "Get Over Here", file: "audio/Get over here.mp3" },

    { name: "Low Honor", file: "audio/Bad Choice.mp3" },
    { name: "Welp", file: "audio/That was a mistake.mp3" },
    { name: "Paunch", file: "audio/ATTACK.mp3" },
    { name: "Power Down", file: "audio/Windows power down.mp3" },
    { name: "That was a fail", file: "audio/Fail.mp3" },
    { name: "Hydration", file: "audio/Pepsimann.mp3" },

    { name: "Metal Pipe", file: "audio/Metal Pipe Sound.mp3" },
    { name: "Alarm", file: "audio/Hallway Ambience.mp3" },
    { name: "Goodbye", file: "audio/Goodbye.mp3" },
    { name: "Dun Dun Dunnnn", file: "audio/Dun Dun Dun.mp3" },
    { name: "Squish", file: "audio/Squish.mp3" },
    { name: "Birb", file: "audio/bird-sounds.mp3" },

    { name: "Thinking Error", file: "audio/Dial Up.mp3" },
    { name: "CLAP CLAP", file: "audio/Applause.mp3" },
    { name: "Break My Stride", file: "audio/Break My Stride - Matthew Wilder (192k).mp3" },

    { name: "Sound 37", file: "audio/sound37.mp3" },
    { name: "Sound 38", file: "audio/sound38.mp3" },
    { name: "Sound 39", file: "audio/sound39.mp3" },
    { name: "Sound 40", file: "audio/sound40.mp3" },
    { name: "Sound 41", file: "audio/sound41.mp3" },
    { name: "Sound 42", file: "audio/sound42.mp3" },
    { name: "Sound 43", file: "audio/sound43.mp3" },
    { name: "Sound 44", file: "audio/sound44.mp3" },
    { name: "Sound 45", file: "audio/sound45.mp3" },
    { name: "Sound 46", file: "audio/sound46.mp3" },
    { name: "Sound 47", file: "audio/sound47.mp3" },
    { name: "Sound 48", file: "audio/sound48.mp3" },
    { name: "Sound 49", file: "audio/sound49.mp3" },
    { name: "Sound 50", file: "audio/sound50.mp3" }
];

const container = document.getElementById("soundboard");
const stopButton = document.getElementById("stopAll");

let allAudio = [];

sounds.forEach(sound => {
    const button = document.createElement("div");
    button.className = "button";
    button.innerText = sound.name;

    const audio = new Audio(sound.file);
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
const soundboardPage = document.getElementById("soundboardPage");
const ttsPage = document.getElementById("ttsPage");

document.getElementById("pageSoundboard").onclick = () => {
    soundboardPage.style.display = "block";
    ttsPage.style.display = "none";
};

document.getElementById("pageTTS").onclick = () => {
    soundboardPage.style.display = "none";
    ttsPage.style.display = "block";
};

// -------- SPELL & SPEAK --------
const ttsGrid = document.getElementById("ttsGrid");
const ttsOutput = document.getElementById("ttsOutput");

let currentText = "";

const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split("");

keys.forEach(letter => {
    const key = document.createElement("div");
    key.className = "ttsKey";
    key.innerText = letter;

    key.onclick = () => {
        currentText += letter;
        ttsOutput.innerText = currentText;

        const audio = new Audio(`audio/${letter}.mp3`);
        audio.play();
    };

    ttsGrid.appendChild(key);
});

// BACKSPACE (NO SOUND)
document.getElementById("backspace").onclick = () => {
    currentText = currentText.slice(0, -1);
    ttsOutput.innerText = currentText;
};

// RESET
document.getElementById("clearText").onclick = () => {
    currentText = "";
    ttsOutput.innerText = "";
};
