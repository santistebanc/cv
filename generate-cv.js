const { renderToFile } = require('@react-pdf/renderer');
const React = require('react');
const CV = require('./cv-component.js');

async function generatePDF() {
  try {
    console.log('Generating CV PDF...');
    
    await renderToFile(React.createElement(CV), `${__dirname}/Carlos_Santisteban_CV.pdf`);
    
    console.log('✓ CV generated successfully as Carlos_Santisteban_CV.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
}

generatePDF();

