function printResume() {
    let doc = new jspdf.jsPDF();
    let source = dom.resume;

    window.html2canvas = html2canvas;

    doc.html(
        source,
        { callback: () => doc.output("dataurlnewwindow") },
        15,
        15,
    );

    //doc.output("dataurlnewwindow");
}

function importResume() {
    console.error("Not implemented");
}

function exportResume() {
    console.error("Not implemented");
}
