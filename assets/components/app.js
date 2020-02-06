class App {
  constructor(gradeTable, pageHeader){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
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
  }
}
