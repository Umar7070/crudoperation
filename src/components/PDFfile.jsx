import React from 'react';
import jsPDF from 'jspdf';

const YourComponent = () => {
  
  const downloadAsPDF = () => {
    const pdf = new jsPDF();

    // Your HTML element you want to convert to PDF
    const content = document.getElementById('contentToConvert');

    // Convert HTML content to a canvas
    pdf.html(content, {
      callback: function (pdf) {
        pdf.save('content.pdf'); // Save the PDF with the specified name
      },
    });
  };

  return (
    <div>
      {/* The content to be converted to PDF */}
      <div id="contentToConvert">
        <table width="100%" style={{ background: 'linear-gradient(245deg, #00A0FA 0%, #3E00EE 100%)', borderRadius: '16px', padding: '40px 0 40px', position: 'relative' }}>
          <tr>
            <td>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '50%', top: '0', transform: 'translateX(-50%)', backgroundImage: 'url(http://drive.google.com/uc?export=view&id=1qMbCBI4pRAxaA8LCbndNcT6ygu7AO3Q7)', backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', width: '368px', height: '267px' }}></div>
                {/* Your table content goes here */}
              </div>
            </td>
          </tr>
        </table>
      </div>
      <button onClick={downloadAsPDF}>Download as PDF</button>
    </div>
  );
};

export default YourComponent;