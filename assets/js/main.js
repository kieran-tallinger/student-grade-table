var table = document.getElementById('table');
var headerAverageEl = document.getElementById('badge-for-average');
var formEl = document.getElementById('form');
var noGradesMessage = document.getElementById('message');

var newGradeTable = new GradeTable(table,noGradesMessage);
var newPageHeader = new PageHeader(headerAverageEl);
var newForm = new GradeForm(formEl);

var newApp = new App(newGradeTable, newPageHeader, newForm);

newApp.start();
