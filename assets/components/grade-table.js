class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
  }
  updateGrades(grades){
    var tableEl = this.tableElement;
    var noGradesMessage = document.getElementById('message');
    if (grades.length === 0) {
      noGradesMessage.classList.remove('d-none');
      while (tableEl.firstChild) {
        tableEl.removeChild(tableEl.firstChild);
      };
    } else if(grades) {
      noGradesMessage.classList.add('d-none');
      while (tableEl.firstChild) {
        tableEl.removeChild(tableEl.firstChild);
      };
      for (var tableIndex = 0; tableIndex < grades.length; tableIndex++) {
        tableEl.appendChild(this.renderGradeRow(grades[tableIndex],this.deleteGrade));
      }
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
      deleteGrade(data.id);
    })
    newTableDataButtonSpot.appendChild(newButton);
    return newTableRow;
  }
}
