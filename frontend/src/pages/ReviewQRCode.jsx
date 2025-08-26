import React from 'react';
// import QRCode from 'qrcode.react';

export default function ReviewQRCode() {
  return (
    <div className="max-w-xl mx-auto my-8 bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center border-4 border-code4purple">
      <h2 className="text-3xl font-bold mb-6 text-code4pink">
        Google Review QR Code Generator
      </h2>
      {/* <QRCode value="https://www.google.com/search?q=your-business-name&ludocid=YOUR_ID#lrd=0x0:0x0,1" className="w-40 h-40 mb-8" /> */}
      <p className="text-lg text-code4blue text-center mb-4">
        Scan the QR code with your phone to leave a direct review.
      </p>
      <button className="bg-code4-gradient text-white font-bold py-2 px-8 rounded-xl shadow-lg mt-4">
        Download QR
      </button>
    </div>
  );
}
