

export default function json2html(data) {
    // Define the table header
    let tableHTML = '<table data-user="bajpaisameer2412@gmail.com">';
  
    // Create the table header with column names
    tableHTML += `
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
    `;
  
    // Iterate over each object in the data array to create table rows
    data.forEach(item => {
      tableHTML += '<tr>';
      tableHTML += `<td>${item.Name}</td>`;
      tableHTML += `<td>${item.Age}</td>`;
      tableHTML += item.Gender ? `<td>${item.Gender}</td>` : '';
      tableHTML += '</tr>';
    });
  
    // Close the table
    tableHTML += '</tbody></table>';
  
    return tableHTML;
  }
  