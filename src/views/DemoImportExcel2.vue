<template>
    <div>
      <h1>{{ title }}</h1>
  
      <!-- Import Excel button -->
      <input type="file" @change="handleFileUpload" accept=".xlsx" />
      <button @click="convertToJson">Convert to JSON</button>
  
      <!-- Display converted JSON -->
      <table v-if="convertedJson" border="1">
        <thead>
          <tr>
            <th v-for="(header, index) in convertedJson[0]" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in convertedJson" :key="rowIndex">
            <td v-for="(value, colIndex) in row" :key="colIndex">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { read, utils } from 'xlsx';
  
  export default {
    data() {
      return {
        title: "#Excel to JSON Conversion",
        excelData: null,
        convertedJson: null,
      };
    },
  
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
  
        reader.onload = e => {
          const data = new Uint8Array(e.target.result);
          const workbook = read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
  
          this.excelData = jsonData;
        };
  
        reader.readAsArrayBuffer(file);
      },
  
      convertToJson() {
        if (this.excelData) {
          this.convertedJson = this.excelData;
        } else {
          console.log('No Excel data to convert');
        }
      },
    },
  };
  </script>
  