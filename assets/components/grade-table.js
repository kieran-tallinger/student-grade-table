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
      var newTableDataName = document.createElement('td');
      newTableDataName.textContent = grades[tableIndex].name;
      newTableRow.appendChild(newTableDataName);
      var newTableDataCourse = document.createElement('td');
      newTableDataCourse.textContent = grades[tableIndex].course;
      newTableRow.appendChild(newTableDataCourse);
      var newTableDataGrade = document.createElement('td');
      newTableDataGrade.textContent = grades[tableIndex].grade;
      newTableRow.appendChild(newTableDataGrade);
    }
  }
}
