class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var newFormData = new FormData(event.target);
    var newName = newFormData.get(name);
    var newCourse = newFormData.get(course);
    var newGrade = newFormData.get(grade);
    this.createGrade(newName,newCourse,newGrade);
    newFormData.reset();
    console.log('hi from handleSubmit');
  }
}
