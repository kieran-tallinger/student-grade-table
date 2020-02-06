class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  getGrades() {
    $.ajax({
      method: 'GET',
      url:'http://sgt.lfzprototypes.com/api/grades',
      headers: {"X-Access-Token": 'od2BPKJo'},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start(){
    this.getGrades();
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var newAverage = 0;
    grades.forEach(function (student) {
      newAverage += student.grade;
    });
    this.pageHeader.updateAverage(newAverage/grades.length);
  }
}
