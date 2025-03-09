function printResume() {
    let doc = new jsPDF();
    let source = dom.resume;
    doc.fromHTML(
    source,
    15,
    15,
    {
        "width": 180,
        //"elementHandlers": () => false
    });

    doc.output("dataurlnewwindow");
}

function importResume() {
    console.error("Not implemented");
}

function exportResume() {
    console.error("Not implemented");
}
