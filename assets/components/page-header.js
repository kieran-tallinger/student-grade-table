class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage (newAverage){
    var headerElement = document.getElementById('badge-for-average');
    headerElement.textContent = newAverage;
  }
}
