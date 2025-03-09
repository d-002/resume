let dom = {
    "resume-container": null,
    resume: null,
    picture: null
};

function setDocumentSize() {
    let W = dom["resume-container"].offsetWidth;

    let w = Math.floor(W*0.7);
    let h = Math.floor(w*29.7/21);

    dom["resume-container"].style = "--w: "+w+"px; --h: "+h+"px";
}

window.onload = () => {
    // add info elements
    Object.keys(info).forEach(id => dom[id] = null);

    Object.keys(dom).forEach(id => dom[id] = document.getElementById(id));

    window.addEventListener("resize", setDocumentSize);
    setDocumentSize();

    updateColorScheme();
    fillInfo();
};
