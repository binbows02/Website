function sfx(location) {
    let audio = new Audio("sounds/click.mp3");
    audio.play();

    setTimeout(function () {
        window.location.href = location;
    }, 200);

    cursor = pointer;
}

function open_website() {
    let audio = new Audio("sounds/click.mp3");
    audio.play();

    window.open("https://discord.gg/khH8kezDVz");
}