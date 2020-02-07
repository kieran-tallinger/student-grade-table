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
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name,course,grade){
    $.ajax({
      method: 'POST',
      url: 'http://sgt.lfzprototypes.com/api/grades',
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: { "X-Access-Token": "od2BPKJo"},
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  deleteGrade(id){
    console.log(id);
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
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
    var newSum = 0;
    grades.forEach(function (student) {
      newSum += student.grade;
    });
    var newAverage = newSum/grades.length
    this.pageHeader.updateAverage(newAverage.toPrecision(2));
  }
}
