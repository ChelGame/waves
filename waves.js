class Waves {
    constructor() {}

    start() {
        window.addEventListener('click', (e) => {
            const X = e.clientX;
            const Y = e.clientY;
            const Colors = ['#7300ae9e', '#0808d19e', '#d108129e'];
            const color = Colors[Math.floor(Math.random() * 3)];
            this.wave(color, X, Y);
        });
    }

    wave(color, x, y) {
        const wave = document.createElement('DIV');
        document.querySelector('body').appendChild(wave);
        wave.classList.add('wave');

        let cWid = document.documentElement.clientWidth, cHei = document.documentElement.clientHeight;

        const rad = (cWid > cHei) ? cWid * 1.5 : cHei * 1.5;
        const crest = rad * 0.05;
        const midCrest = crest / 2;

        wave.style.width = (rad * 2) + 'px';
        wave.style.height = wave.style.width;
        wave.style.left = (x - rad) + 'px';
        wave.style.top = (y - rad) + 'px';

        let i = 1, l = 0, m = 0, r = 0;
        const interval = setInterval(() => {
            if (i < rad) {
                l = i / (rad * 0.01);
                m = (i > midCrest) ? l - 2.5 : 0;
                r = (i > crest) ? m - 2.5 : 0;
            } else {
                l = (i <= (rad * 0.01)) ? i / (rad * 0.01) : 100;
                m = (i <= (rad * 0.01) - midCrest) ? l + 2.5 : 100;
                r = (i <= (rad * 0.01) - crest) ? m + 2.5 : 100;
            }

            wave.style.background = `radial-gradient(circle, rgba(16,16,16,0.1) ${r}%, ${color} ${m}%, rgba(16,16,16,0.1) ${l}%)`;
            i += 1;
            if (r === 100) {
                clearInterval(interval);
                wave.remove();
            }
        }, 1);

    }
}

const waves = new Waves();
waves.start();
