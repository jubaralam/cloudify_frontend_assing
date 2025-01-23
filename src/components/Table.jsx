import { useState } from "react";
import Select from "react-select";

const Table = () => {
  // State to manage rows
  const [rows, setRows] = useState([
    { singleOption: null, multiOptions: [] }, // Initial row
  ]);

  // Dropdown options
  const singleSelectOptions = [
    { value: "software_engineer", label: "Software Engineer" },
    { value: "product_manager", label: "Product Manager" },
    { value: "data_analyst", label: "Data Analyst" },
    { value: "ui_ux_designer", label: "UI/UX Designer" },
    { value: "devops_engineer", label: "DevOps Engineer" },
  ];

  const multiSelectOptions = {
    software_engineer: [
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "javascript", label: "JavaScript" },
      { value: "nodejs", label: "Node.js" },
      { value: "react", label: "React" },
    ],
    product_manager: [
      { value: "jira", label: "Jira" },
      { value: "trello", label: "Trello" },
      { value: "figma", label: "Figma" },
      { value: "microsoft_project", label: "Microsoft Project" },
      { value: "confluence", label: "Confluence" },
    ],
    data_analyst: [
      { value: "excel", label: "Excel" },
      { value: "tableau", label: "Tableau" },
      { value: "powerbi", label: "Power BI" },
      { value: "python", label: "Python" },
      { value: "sql", label: "SQL" },
    ],
    ui_ux_designer: [
      { value: "figma", label: "Figma" },
      { value: "adobe_xd", label: "Adobe XD" },
      { value: "sketch", label: "Sketch" },
      { value: "invision", label: "InVision" },
      { value: "zeplin", label: "Zeplin" },
    ],
    devops_engineer: [
      { value: "docker", label: "Docker" },
      { value: "kubernetes", label: "Kubernetes" },
      { value: "jenkins", label: "Jenkins" },
      { value: "aws", label: "AWS" },
      { value: "terraform", label: "Terraform" },
    ],
  };

  // Add new row
  const handleAddRow = () => {
    setRows([...rows, { singleOption: null, multiOptions: [] }]);
  };

  // Update single select
  const handleSingleSelectChange = (index, selectedOption) => {
    const updatedRows = [...rows];
    updatedRows[index].singleOption = selectedOption;
    updatedRows[index].multiOptions = []; // Reset multi-options when designation changes
    setRows(updatedRows);
  };

  // Update multi-select
  const handleMultiSelectChange = (index, selectedOptions) => {
    const updatedRows = [...rows];
    updatedRows[index].multiOptions = selectedOptions || [];
    setRows(updatedRows);
  };

  return (
    <div className="p-6">
      <table className="w-full border-collapse border border-gray-300">
        {/* Table Header */}
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left">
              Select Designation
            </th>
            <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left">
              Select Technologies
            </th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {/* Single Select */}
              <td className="border border-gray-300 px-4 py-2">
                <Select
                  options={singleSelectOptions}
                  value={row.singleOption}
                  onChange={(selectedOption) =>
                    handleSingleSelectChange(index, selectedOption)
                  }
                  placeholder="Select a Designation"
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </td>
              {/* Multi Select */}
              <td className="border border-gray-300 px-4 py-2 ">
                <Select
                  closeMenuOnSelect={false}
                  options={
                    row.singleOption
                      ? multiSelectOptions[row.singleOption.value] || []
                      : []
                  }
                  value={row.multiOptions}
                  onChange={(selectedOptions) =>
                    handleMultiSelectChange(index, selectedOptions)
                  }
                  isMulti
                  placeholder="Select multiple options"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  isDisabled={!row.singleOption} // Disable until designation is selected
                />
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
  );
};

export default Table;
