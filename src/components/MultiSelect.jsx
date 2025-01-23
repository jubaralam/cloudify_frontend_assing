import  { useState } from 'react'

const MultiSelect = () => {
 
  // State for handling rows
  const [rows, setRows] = useState([
    { singleOption: "", multiOptions: [] }, // Initial row
  ]);

  // Options for dropdowns
  const singleSelectOptions = ["Option 1", "Option 2", "Option 3"];
  const multiSelectOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  // Add a new row
  const handleAddRow = () => {
    setRows([...rows, { singleOption: "", multiOptions: [] }]);
  };

  // Update single select value
  const handleSingleSelectChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].singleOption = value;
    setRows(updatedRows);
  };

  // Update multi-select values
  const handleMultiSelectChange = (index, option) => {
    const updatedRows = [...rows];
    const currentOptions = updatedRows[index].multiOptions;

    if (currentOptions.includes(option)) {
      updatedRows[index].multiOptions = currentOptions.filter(
        (o) => o !== option
      );
    } else {
      updatedRows[index].multiOptions = [...currentOptions, option];
    }

    setRows(updatedRows);
  };
  return (
    <div className="p-6">
      <h1>Multi</h1>
      <table className="w-full border-collapse border border-gray-300">
        {/* Table Header */}
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left">
              Single Select
            </th>
            <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left">
              Multi Select
            </th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {/* Single Select */}
              <td className="border border-gray-300 px-4 py-2">
                <select
                // options={label:row,value:row}
                  value={row.singleOption}
                  onChange={(e) =>
                    handleSingleSelectChange(index, e.target.value)
                  }
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                  <option value="">Select an option</option>
                  {singleSelectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              {/* Multi Select */}
              <td className="border border-gray-300 px-4 py-2">
                <div className="w-full">
                  {multiSelectOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={option}
                        checked={row.multiOptions.includes(option)}
                        onChange={() => handleMultiSelectChange(index, option)}
                        className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <label>{option}</label>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Row Button */}
      <div className="mt-4">
        <button
          className="flex items-center gap-2 rounded bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
          onClick={handleAddRow}
        >
          <span>+</span> Add New Row
        </button>
      </div>
    </div>
  )
}

export default MultiSelect