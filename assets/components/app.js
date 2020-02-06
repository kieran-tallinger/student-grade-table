class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
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
  createGrade(name,course,grade){
    console.log(name,course,grade);
  }
  handleCreateGradeError(error){
    console.error(error);
  }
  handleCreateGradeSuccess(){
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
