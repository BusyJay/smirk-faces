
var updeg = 0;
var leftdeg = 1;
var rightdeg = 2;
var downdeg = 3;

function set(id, deg) {
    deg = deg * 90;
    document.getElementById(id).className = "r" + deg;
}

function set_up(deg) {
    updeg = ((deg + 4) % 4);
    set("up", updeg);
}

function set_left(deg) {
    leftdeg = ((deg + 4) % 4);
    set("left", leftdeg);
}

function set_right(deg) {
    rightdeg = ((deg + 4) % 4);
    set("right", rightdeg);
}

function set_down(deg) {
    downdeg = ((deg + 4) % 4);
    set("down", downdeg);
}

function reset() {
    set_up(Math.floor(Math.random() * 4));
    set_left(Math.floor(Math.random() * 4));
    set_right(Math.floor(Math.random() * 4));
    set_down(Math.floor(Math.random() * 4));
}

function rotateleft() {
    set_left(leftdeg + 1);
    set_right(rightdeg - 2)
}

function rotateright() {
    set_right(rightdeg + 1)
}

function rotateup() {
    set_up(updeg + 1);
    set_right(rightdeg + 1);
    set_down(downdeg - 1)
}

function rotatedown() {
    set_down(downdeg + 1)
    set_left(leftdeg - 1);
}