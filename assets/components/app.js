class App {
  constructor(){
    this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    console.log(grades)
  }
}
