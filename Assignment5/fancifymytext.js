function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "2em";
}

function makeTextFancy() {
    if(!document.getElementById("boringButton").checked) {
        document.getElementById("textArea").style.fontWeight = "bold";
        document.getElementById("textArea").style.color = "blue";
        document.getElementById("textArea").style.textDecoration = "underline";
    }
    else {
        document.getElementById("textArea").style.fontWeight = "";
        document.getElementById("textArea").style.color = "";
        document.getElementById("textArea").style.textDecoration = "";
    }
}

function makeTextMoo() {
    var text = document.getElementById("textArea").value;
    var text = text.toUpperCase();
    var textParts = text.split(".");
    text = textParts.join("-Moo");
    document.getElementById("textArea").value = text;
}