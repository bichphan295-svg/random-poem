let clicked = false;

function randomPoem() {

    if (clicked) {
        return;
    }

    clicked = true;

    const randomIndex =
        Math.floor(Math.random() * poems.length);

    document.getElementById("poem").innerText =
        poems[randomIndex];

    document.getElementById("btn").disabled = true;

    document.getElementById("btn").innerText =
        "đã nhận thơ hôm nay";
}