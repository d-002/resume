let info = {
    Iname: "John Smith",
    Ititle: "Software engineer at Google",
    Isubtitle: "bottom text",
    Iphone: "+00 1234567890",
    Iemail1: "john@smith.com",
    Iemail2: "john.smith@google.com",
    Iaddress: "New York City",
    Iwebsite1: "google.com/john-smith",
    Iwebsite2: "john.smith.com/google"
};
let img = "";

function fillInfo() {
    Object.keys(info).forEach(id => dom[id].innerText = info[id]);

    dom.picture.href = img;
}
