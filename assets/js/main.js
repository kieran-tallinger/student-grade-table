var table = document.getElementById('table');
var newGradeTable = new GradeTable(table);
var headerAverageEl = document.getElementById('badge-for-average');
var newPageHeader = new PageHeader(headerAverageEl);
var formEl = document.getElementById('form');
var newForm = new GradeForm(formEl);
var newApp = new App(newGradeTable, newPageHeader, newForm);

newApp.start();
