// Sample data
const monitoringData = [
  { date: "2024-12-07", time: "08:00 AM", fishAge: 30, ph: 7.2, motorDelay: "500ms" },
  { date: "2024-12-07", time: "12:00 PM", fishAge: 30, ph: 6.8, motorDelay: "600ms" },
  { date: "2024-12-07", time: "06:00 PM", fishAge: 30, ph: 7.6, motorDelay: "700ms" },
  { date: "2024-12-06", time: "09:00 PM", fishAge: 29, ph: 7.0, motorDelay: "550ms" },
  { date: "2024-12-06", time: "06:00 AM", fishAge: 29, ph: 7.4, motorDelay: "650ms" },
];

// Render table rows
const tableBody = document.getElementById("tableBody");
function renderTable(data) {
  tableBody.innerHTML = ""; // Clear table
  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="px-6 py-3 text-sm text-gray-700">${row.date}</td>
      <td class="px-6 py-3 text-sm text-gray-700">${row.time}</td>
      <td class="px-6 py-3 text-sm text-gray-700">${row.fishAge}</td>
      <td class="px-6 py-3 text-sm text-gray-700">${row.ph}</td>
      <td class="px-6 py-3 text-sm text-gray-700">${row.motorDelay}</td>
    `;
    tableBody.appendChild(tr);
  });
}

// Sort table data
function sortTable(column, order) {
  monitoringData.sort((a, b) => {
    let valA = a[column];
    let valB = b[column];

    // For date comparison, convert strings to Date objects
    if (column === "date") {
      valA = new Date(valA);
      valB = new Date(valB);
    }

    if (order === "asc") {
      return valA > valB ? 1 : -1;
    } else {
      return valA < valB ? 1 : -1;
    }
  });
  renderTable(monitoringData);
}

// Event listener for sorting
document.getElementById("sortButton").addEventListener("click", () => {
  const column = document.getElementById("sortColumn").value;
  const order = document.getElementById("sortOrder").value;
  sortTable(column, order);
});

// Initial render
renderTable(monitoringData);