import React, { useState } from "react";
import Papa from "papaparse";

function CSVUploader() {
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
      },
      header: true, // Assuming the first row contains headers
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-4">
      <h1 className="text-5xl my-8">Welcome Dude !</h1>
      <input
        type="file"
        accept=".csv"
        className="file-input file-input-info w-full max-w-xs"
        onChange={handleFileUpload}
      />
      {csvData.length > 0 && (
        <>
          <div className="w-[90%] h-[60vh] mx-auto overflow-y-scroll overflow-x-scroll mt-8">
            <table className="table table-zebra">
              <thead>
                <tr>
                  {csvData.length > 0 &&
                    Object.keys(csvData[0]).map((header, index) => (
                      <th className="text-lg" key={index}>
                        {header}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn btn-info mt-4">Let's Create Chart ?</button>
        </>
      )}
    </div>
  );
}

export default CSVUploader;
