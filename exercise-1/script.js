var animation = bodymovin.loadAnimation({
    container: document.getElementById("animation"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "resources/flora-app-icon-animation.json"
});

const ids = ["card", "lottieWrapper", "welcomeTitle", "welcomeSubTitle", "continueButton"]

function resetAnimation() {
    ids.forEach(id => {
        var element = document.getElementById(id);
        element.classList.remove(id);
        void element.offsetWidth;
        element.classList.add(id);
    })
    
    animation.destroy();
    animation = bodymovin.loadAnimation({
        container: document.getElementById("animation"),
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "resources/flora-app-icon-animation.json"
    });
}