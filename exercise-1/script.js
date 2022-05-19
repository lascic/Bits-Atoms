var animation = bodymovin.loadAnimation({
    container: document.getElementById("animation"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "resources/flora-app-icon-animation.json"
});

function resetAnimation() {
    var card = document.getElementById("card");
    var lottieWrapper = document.getElementById("lottieWrapper");
    var welcomeTitle = document.getElementById("welcomeTitle");
    var welcomeSubTitle = document.getElementById("welcomeSubTitle")
    var continueButton = document.getElementById("continueButton")

    card.classList.remove("card");
    lottieWrapper.classList.remove("lottieWrapper");
    welcomeTitle.classList.remove("welcomeTitle");
    welcomeSubTitle.classList.remove("welcomeSubTitle");
    continueButton.classList.remove("continueButton");

    animation.destroy();
    animation = bodymovin.loadAnimation({
        container: document.getElementById("animation"),
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "resources/flora-app-icon-animation.json"
    });

    void card.offsetWidth;
    void lottieWrapper.offsetWidth;
    void welcomeTitle.offsetWidth;
    void welcomeSubTitle.offsetWidth;
    void continueButton.offsetWidth;

    card.classList.add("card");
    lottieWrapper.classList.add("lottieWrapper");
    welcomeTitle.classList.add("welcomeTitle");
    welcomeSubTitle.classList.add("welcomeSubTitle");
    continueButton.classList.add("continueButton");
}