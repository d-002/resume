function printResume() {
    html2pdf().from(dom.resume).toPdf().get("pdf").then(pdf => {
        window.open(pdf.output("bloburl"), "_blank");
    });
}

function importResume() {
    console.error("Not implemented");
}

function exportResume() {
    console.error("Not implemented");
}
