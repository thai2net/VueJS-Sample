<template>
    <div>
      <button @click="generatePdf">Generate PDF</button>
      <table ref="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import jsPDF from 'jspdf';
  
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'John Doe', age: 30, address: '123 Main St' },
          { id: 2, name: 'Jane Smith', age: 25, address: '456 Elm St' },
          { id: 3, name: 'Bob Johnson', age: 40, address: '789 Oak St' },
          // add more items as needed
        ],
        tableHeight: 0,
        rowHeight: 0,
        rowsPerPage: 0,
      };
    },
    mounted() {
      // calculate the height of the table and a single row
      const table = this.$refs.table;
      this.tableHeight = table.clientHeight;
      this.rowHeight = table.querySelector('tbody tr').clientHeight;
  
      // calculate the number of rows that can fit on a page
      const pageHeight = 297; // A4 page height in mm
      const marginTop = 20; // margin top in mm
      const marginBottom = 20; // margin bottom in mm
      const rowHeightMm = this.rowHeight / 3.779528; // convert px to mm
      this.rowsPerPage = Math.floor(
        (pageHeight - marginTop - marginBottom) / rowHeightMm
      );
    },
    methods: {
      generatePdf() {
        const doc = new jsPDF();
        let yPos = 20;
  
        // loop through items and add to PDF
        this.items.forEach((item, index) => {
          // add a new page if needed
          if (index % this.rowsPerPage === 0 && index !== 0) {
            doc.addPage();
            yPos = 20;
          }
  
          // add the row to the PDF
          doc.text(item.name, 20, yPos);
          doc.text(item.age.toString(), 80, yPos);
          doc.text(item.address, 120, yPos);
          yPos += this.rowHeight / 3.779528; // convert px to mm
        });
  
        // download the PDF
        doc.save('table.pdf');
      },
    },
  };
  </script>
  