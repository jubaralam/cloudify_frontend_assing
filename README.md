# Table Component Documentation

## Overview
This React component is a dynamic table that allows users to select a designation and associated technologies from dropdown menus. It is designed to be extendable with the ability to add new rows to the table, making it ideal for use cases such as assigning skills to job positions.

## Features
- **Single Select Dropdown**: Allows selecting a designation (e.g., Software Engineer, Product Manager).
- **Multi Select Dropdown**: Displays technology options specific to the selected designation. Technologies can be selected in multiple options.
- **Dynamic Row Management**: Users can add new rows to the table, with each row having its own pair of single and multi-select dropdowns.
- **Reset Multi-Select on Designation Change**: When the designation is changed, the multi-select options are reset.
- **Conditional Disabling**: The multi-select dropdown is disabled until a designation is selected.

## Code Breakdown

### State Management
- `rows`: This state is an array of objects, each representing a row in the table. Each object contains:
  - `singleOption`: Stores the selected designation.
  - `multiOptions`: Stores the selected technologies (as an array of objects).

### Dropdown Options
1. **Single Select (Designation)**: A list of available job designations:
   - Software Engineer
   - Product Manager
   - Data Analyst
   - UI/UX Designer
   - DevOps Engineer

2. **Multi Select (Technologies)**: A dictionary of available technologies for each designation:
   - For `Software Engineer`: Python, Java, JavaScript, Node.js, React
   - For `Product Manager`: Jira, Trello, Figma, Microsoft Project, Confluence
   - For `Data Analyst`: Excel, Tableau, Power BI, Python, SQL
   - For `UI/UX Designer`: Figma, Adobe XD, Sketch, InVision, Zeplin
   - For `DevOps Engineer`: Docker, Kubernetes, Jenkins, AWS, Terraform

### Event Handlers
- `handleAddRow`: Adds a new row to the `rows` state, with empty single and multi-select values.
- `handleSingleSelectChange`: Updates the selected designation for a specific row and resets the multi-select options.
- `handleMultiSelectChange`: Updates the selected technologies for a specific row.

### Rendering
- **Table Header**: Contains two columns:
  1. "Select Designation"
  2. "Select Technologies"

- **Table Body**: Iterates through the `rows` state and renders each row with:
  - A single-select dropdown for choosing the designation.
  - A multi-select dropdown for choosing the associated technologies (disabled until a designation is selected).
  
- **Add Row Button**: Allows the user to add a new row to the table, initializing empty dropdown selections.

## Usage

```js
import Table from './Table';

const App = () => {
  return (
    <div>
      <h1>Dynamic Table with Designation and Technologies</h1>
      <Table />
    </div>
  );
};

export default App;
