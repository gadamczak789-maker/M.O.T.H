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
    { name: "Goodbye", file: "audio/Hallway Ambience.mp3" },
    { name: "Dun Dun Dunnnn", file: "audio/Dun Dun Dun.mp3" },
    { name: "Squish", file: "audio/Squish.mp3" },
    { name: "Birb", file: "audio/bird-sounds.mp3" },

    { name: "Thinking Error", file: "audio/Dial Up.mp3" },
    { name: "CLAP CLAP CLAP CLAP CLAP", file: "audio/Applause.mp3" },
    { name: "Break My Stride", file: "audio/Break My Stride - Matthew Wilder (192k).mp3" },
    { name: "Sound 34", file: "audio/sound34.mp3" },
    { name: "Sound 35", file: "audio/sound35.mp3" },
    { name: "Sound 36", file: "audio/sound36.mp3" }
];

const container = document.getElementById("soundboard");
const stopButton = document.getElementById("stopAll");

let allAudio = [];

sounds.forEach(sound => {
    const button = document.createElement("div");
    button.className = "button";

    button.innerHTML = `
        <div class="icon">🥌</div>
        <div class="label">${sound.name}</div>
    `;

    const audio = new Audio(sound.file);
    allAudio.push(audio);

    button.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
    });

    container.appendChild(button);
});

// STOP ALL BUTTON
stopButton.addEventListener("click", () => {
    allAudio.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
});