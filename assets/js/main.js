var table = document.getElementById('table');
var newGradeTable = new GradeTable(table);
var headerAverageEl = document.getElementById('badge-for-average');
var newPageHeader = new PageHeader(headerAverageEl);
var newApp = new App(newGradeTable, newPageHeader);

newApp.start();
