function changeBckgColor() {
    if (document.body.style.background.valueOf() === new String("green").valueOf()) {
        document.body.style.background = "";
    } else {
        document.body.style.background = "green";
    }
}

function showHost() {
    alert(location.host);
}

function showBrowser() {
    alert(navigator.userAgent);
}
