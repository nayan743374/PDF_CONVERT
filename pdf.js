function convertToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function() {
                const pageWidth = doc.internal.pageSize.getWidth();
                const pageHeight = doc.internal.pageSize.getHeight();

                const imgWidth = pageWidth - 20;
                const imgHeight = (img.height * imgWidth) / img.width;

                doc.addImage(img, 'JPEG', 10, 10, imgWidth, imgHeight);
                doc.save('image.pdf');
            };
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please upload an image!');
    }
}
