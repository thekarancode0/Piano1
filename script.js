document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const sounds = {
        C: new Audio('a.wav'),
        D: new Audio('d.wav'),
        E: new Audio('b.wav'),
        F: new Audio('f.wav'),
        G: new Audio('g.wav'),
        A: new Audio('a.wav'),
        B: new Audio('b.wav'),
    };

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const note = key.dataset.note;
            sounds[note].currentTime = 0; // Rewind to start
            sounds[note].play();
        });
    });
});
