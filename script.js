// -------- BOOT --------
window.onload = () => {
    setTimeout(() => {
        document.getElementById("bootScreen").style.display = "none";
    }, 1200);
};

// -------- GLOBAL VOLUME --------
let globalVolume = 1;
document.getElementById("volumeSlider").oninput = (e) => {
    globalVolume = e.target.value;
};

// -------- SOUND FILES --------
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
let allAudio = [];

// LOAD ORDER (for drag-save)
let savedOrder = JSON.parse(localStorage.getItem("soundOrder")) || soundFiles;

function buildSoundboard() {
    container.innerHTML = "";

    savedOrder.forEach(file => {
        const name = file.replace(".mp3", "");

        const btn = document.createElement("div");
        btn.className = "button";
        btn.innerText = name;
        btn.draggable = true;

        const audio = new Audio(`audio/${file}`);
        allAudio.push(audio);

        btn.onclick = () => {
            audio.volume = globalVolume;
            audio.currentTime = 0;
            audio.play();
        };

        // DRAG EVENTS
        btn.ondragstart = () => dragStart(file);
        btn.ondragover = (e) => e.preventDefault();
        btn.ondrop = () => drop(file);

        container.appendChild(btn);
    });
}

let draggedItem = null;

function dragStart(file) {
    draggedItem = file;
}

function drop(targetFile) {
    const from = savedOrder.indexOf(draggedItem);
    const to = savedOrder.indexOf(targetFile);

    savedOrder.splice(from, 1);
    savedOrder.splice(to, 0, draggedItem);

    localStorage.setItem("soundOrder", JSON.stringify(savedOrder));
    buildSoundboard();
}

buildSoundboard();

// STOP ALL
document.getElementById("stopAll").onclick = () => {
    allAudio.forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
};

// -------- PAGE SWITCH --------
function showPage(page) {
    document.getElementById("soundboardPage").classList.add("hidden");
    document.getElementById("ttsPage").classList.add("hidden");
    document.getElementById("characterPage").classList.add("hidden");

    document.getElementById(page + "Page").classList.remove("hidden");
}

// -------- REAL TTS --------
document.getElementById("speakBtn").onclick = () => {
    const text = document.getElementById("ttsInput").value;

    const speech = new SpeechSynthesisUtterance(text);
    speech.volume = globalVolume;

    speechSynthesis.speak(speech);
};

// -------- CHARACTER SAVE / LOAD --------
document.getElementById("saveChar").onclick = () => {
    const data = {
        name: charName.value,
        class: charClass.value,
        level: charLevel.value,
        hp: charHP.value,
        abilities: charAbilities.value
    };

    localStorage.setItem("character", JSON.stringify(data));
};

document.getElementById("loadChar").onclick = () => {
    const data = JSON.parse(localStorage.getItem("character"));
    if (!data) return;

    charName.value = data.name;
    charClass.value = data.class;
    charLevel.value = data.level;
    charHP.value = data.hp;
    charAbilities.value = data.abilities;
};

// -------- PWA --------
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}
