const animationConfiguration = {
    container: document.getElementById("animation"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "resources/flora-app-icon-animation.json"
}

var animation = bodymovin.loadAnimation(animationConfiguration);

const ids = ["card",
            "lottieWrapper",
            "welcomeTitle", 
            "welcomeSubTitle", 
            "continueButton",
            "infoButton"]

function resetAnimation() {
    ids.forEach(id => {
        var element = document.getElementById(id);
        element.classList.remove(id);
        void element.offsetWidth;
        element.classList.add(id);
    })

    animation.destroy();
    animation = bodymovin.loadAnimation(animationConfiguration);
}