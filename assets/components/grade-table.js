class GradeTable {
  constructor(tableElement, gradeTable){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    var tableEl = this.tableElement;
    while (tableEl.firstChild) {
      tableEl.removeChild(tableEl.firstChild);
    };
    for (var tableIndex = 0; tableIndex < grades.length; tableIndex++) {
      var newTableRow = document.createElement('tr');
      tableEl.appendChild(newTableRow)
      for (var dataIndex = 0; dataIndex < 3; dataIndex++) {
        var newTableData = document.createElement('td');
        if (dataIndex === 0) {
          newTableData.textContent = grades[tableIndex].name;
        } else if (dataIndex === 1) {
          newTableData.textContent = grades[tableIndex].course;
        } else if (dataIndex === 2) {
          newTableData.textContent = grades[tableIndex].grade;
        }
        newTableRow.appendChild(newTableData);
      }
    }
    console.log(grades)
  }
}
