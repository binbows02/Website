function sfx(location) {
    let audio = new Audio("sounds/click.mp3");
    audio.play();

    setTimeout(function () {
        window.location.href = location;
    }, 300);

    cursor = pointer;
}


function open_site() {
    let audio = new Audio("sounds/click.mp3");
    audio.play();

    setTimeout(function () {
        window.location.href = "https://binbows02.github.io/Steppets/main%20menu/main%20menu.html";
    }, 300);

    cursor = pointer;
}


function open_website() {
    let audio = new Audio("sounds/click.mp3");
    audio.play();

    window.open("https://discord.gg/khH8kezDVz");

    cursor = pointer;
}

function sfx_nolink() {
    let audio = new Audio("sounds/click.mp3");
    audio.play();

    cursor = pointer;
}