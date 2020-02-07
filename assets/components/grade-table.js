class GradeTable {
  constructor(tableElement, gradeTable){
    this.tableElement = tableElement;
    this.onDeleteClick = null;
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
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data,deleteGrade){
    var newTableRow = document.createElement('tr');
    var newTableDataName = document.createElement('td');
    newTableDataName.textContent = data.name;
    newTableRow.appendChild(newTableDataName);
    var newTableDataCourse = document.createElement('td');
    newTableDataCourse.textContent = data.course;
    newTableRow.appendChild(newTableDataCourse);
    var newTableDataGrade = document.createElement('td');
    newTableDataGrade.textContent = data.grade;
    newTableRow.appendChild(newTableDataGrade);
    var newTableDataButtonSpot = document.createElement('td');
    newTableRow.appendChild(newTableDataButtonSpot);
    var newButton = document.createElement('button');
    newButton.textContent = 'DELETE';
    newButton.addEventListener('click', function(){
      this.deleteGrade(data.id);
    })
    newTableDataButtonSpot.appendChild(newButton);
    return newTableRow;
  }
}
