let col = [16, 99, 90];
let white = [255, 255, 255];
let themeMult = [0, 0.6, 0.9, 1];

function tohex(i) {
    let h = i.toString(16);
    if (h.length == 1) return "0"+h;
    return h;
}

function lerpCol(col1, col2, t) {
    let [r1, g1, b1] = col1;
    let [r2, g2, b2] = col2;
    let r = Math.floor(r1 + (r2-r1)*t);
    let g = Math.floor(g1 + (g2-g1)*t);
    let b = Math.floor(b1 + (b2-b1)*t);

    return "#"+tohex(r)+tohex(g)+tohex(b);
}

function updateColorScheme() {
    let s = "";
    for (let i = 0, I = themeMult.length; i < I; i++) {
        let c = lerpCol(col, white, themeMult[i]);
        s += "--th"+(i+1)+": "+c+";";
    }

    dom.resume.style = s;
}
