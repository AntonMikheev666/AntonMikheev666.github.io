var isZoomed;

function remove(element) {
    if (element && element.parentNode)
        element.parentNode.removeChild(element);
}

function close() {
    remove(document.querySelector("#canvas"));
    remove(document.querySelector("#overlay"));
    isZoomed = false;
};

function zoom(element){
    var overlay = document.createElement('div');
    overlay.id = "overlay";
    overlay.onclick = close;

    var canvas = document.createElement('div');
    canvas.id = "canvas";

    var picture = document.createElement('img');
    picture.src = element.src;
    picture.id = 'bigPicture'

    canvas.appendChild(picture)

    document.body.appendChild(overlay);
    document.body.appendChild(canvas);

    document.querySelector('#canvas img').style.maxHeight = document.body.clientHeight + 'px';
    document.querySelector('#canvas img').style.width = 'auto';
    var pictureWidth = document.getElementById("bigPicture").width;
    var pictureHeight = document.getElementById("bigPicture").height;
    document.querySelector('#canvas').style.left = (document.body.clientWidth - pictureWidth)/2 + 'px';
    document.querySelector('#canvas').style.top = (document.body.clientHeight - pictureHeight)/2 + 'px';

    isZoomed = true;
};

function handleKeydown(event) {
    event = event || window.event;
    if (event.keyCode === 27 && isZoomed)
        close();
};

if (document.addEventListener) {
    document.addEventListener("keydown", handleKeydown);
}
else if (document.attachEvent) {
    document.attachEvent("onkeydown", handleKeydown);
}