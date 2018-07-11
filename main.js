function loadImages(images, fileName) {
    let imagesData = [];
    for (let i = 0; i < images.length; i++) {
        let img = new Image();
        img.src = images[i];
        img.onload = function () {
            imagesData.push(img);
            if (imagesData.length == images.length) {
                generatePDF(imagesData, fileName);
            }
        };
    }
}

function generatePDF(imagesData, fileName) {
    let doc = new jsPDF('p', 'pt', 'a4');
    for (let i = 0; i < imagesData.length; i++) {
        doc.addImage(imagesData[i], 'JPEG', 10, 10, 575, 820);
        if (i != (imagesData.length - 1)) {
            doc.addPage();
        }
    }
    doc.save(fileName + '.pdf');
}
