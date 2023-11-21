function contact_sfx(location) {
    let audio = new Audio("sounds/click.mp3");
    audio.play();

    setTimeout(function () {
        window.location.href = location;
    }, 300);

    cursor = pointer;
}

function open_website() {
    let audio = new Audio("sounds/click.mp3");
    audio.play();

    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}