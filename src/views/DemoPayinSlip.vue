<template>
    <div>
      <button @click="generatePayInSlip">Generate Pay-In Slip</button>
    </div>
  </template>
  
  <script>
  import jsPDF from 'jspdf';
  import JsBarcode from 'jsbarcode';
  
  export default {
    methods: {
      generatePayInSlip() {
        const doc = new jsPDF();
  
        // Set up the page
        doc.setFont('THSarabun', 'bold'); // Set the Thai font (THSarabun) and style
        doc.setFontSize(20);
        doc.text('Pay-In Slip', 40, 25);
  
        // Load the image using require
        const logoImage = require('../assets/ktb-logo.png');
  
        // Add the logo image to the PDF
        doc.addImage(logoImage, 'PNG', 15, 20, 20, 20); // Adjust the position and dimensions as needed
  
        // Generate barcode
        const barcodeValue = '| 099400065016706\r  050460400\r 60050460400320002\r 100\r'; // Replace with your actual barcode value
        const barcodeCanvas = document.createElement('canvas');
        JsBarcode(barcodeCanvas, barcodeValue, {
          format: 'CODE128',
        });
  
        // Convert barcode canvas to base64 image
        const barcodeImage = barcodeCanvas.toDataURL('image/png');
  
        // Add barcode to the PDF
        doc.addImage(barcodeImage, 'PNG', 10, 70, 150, 20); // Adjust the position and dimensions as needed
  
        // Add reference numbers, bank information, and total amount
        doc.setFont('THSarabun', 'normal'); // Set the Thai font (THSarabun) and style
        doc.setFontSize(12);
        doc.text('Ref.1: 050460400', 150, 30);
        doc.text('Ref.2: 60050460400320002',150, 40);
        doc.text('KTB BANK: 96279', 150, 50);
        doc.text('Amount: 100.00', 150, 60);
  
        // Save the PDF file
        doc.save('pay_in_slip.pdf');
      },
    },
  };
  </script>
  