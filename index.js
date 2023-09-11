function prt(prompt) {
    console.log(prompt);
}

let ans, name;
function $(para) {
    let paraLength = para.length
    let define = para[0];
    switch (define) {
        case '.':
            name = para.slice(1, paraLength)
            ans = document.getElementsByClassName(name)[0]; break
        case '#':
            name = para.slice(1, paraLength)
            ans = document.getElementById(name); break;
        default:
            ans = document.getElementsByTagName(para)[0]; break;
    }
}

$.prototype.clk = function (para) {
    ans = ans.addEventListener('click', para);
}

$.prototype.wrt = function (para) {
    ans.innerHTML = para;
}

$.prototype.hide = function () {
    ans.style.display = "none";
}

$.prototype.show = function () {
    ans.style.display = "block";
}

$.prototype.toggle = function () {
    let temp = ans.style.display;
    if (temp == "block") ans.style.display = "none";
    else if (temp == "none") ans.style.display = "block";
}
