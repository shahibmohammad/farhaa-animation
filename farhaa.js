const crtLove1 = () => {
    const move = 1000;
    const boom = 200;
    const easing = "sin.inout";
    const easingBoom = "sin.in";
    const easingOut = "sin.out";
    const opts = { duration: move, easing, opacity: 1 };
    const delta = 150;

    const el = {
        l: document.getElementById("l"),
        o: document.getElementById("o"),
        v: document.getElementById("v"),
        el: document.getElementById("el"),
        blop: new Audio("https://assets.mixkit.co/sfx/preview/mixkit-game-click-1114.mp3")
    };

    return new mojs.Timeline().add([
        new mojs.Tween({
            duration: move,
            onComplete: () => {
                [el.l, el.o, el.v, el.el].forEach((e) => e.style.opacity = 0);
                el.blop.play();
            }
        })
    ]);
};

document.body.addEventListener("click", () => {
    crtLove1().play();
});