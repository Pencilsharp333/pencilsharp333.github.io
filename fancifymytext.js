function alerts(message) {
    alert("Hello, world!");
}

function bigger(message) {
    document.getElementById("textarea").style.fontSize = "24pt";
}

function bold(message) {
    if (document.getElementById("fancy shmancy").checked) {
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.color = "blue";
        document.getElementById("textarea").style.textDecorationLine = "underline";
    }
    else {
        document.getElementById("textarea").style.fontWeight = "normal";
        document.getElementById("textarea").style.color = "black";
        document.getElementById("textarea").style.textDecorationLine = "none";
    }
}

function moo(message) {
    let text = document.getElementById("textarea").value;
    let textArray = text.split(".");
    let newText = "";
    for (let i = 0; i < textArray.length; i++) {
        newText += textArray[i].toUpperCase() + "-Moo.";
    }
    document.getElementById("textarea").value = newText;
}