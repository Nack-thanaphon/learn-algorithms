class Pagination {
    constructor(items, itemsPerPage) {
      this.items = items;
      this.itemsPerPage = itemsPerPage;
      this.currentPage = 1;
    }
  
    getTotalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  
    setCurrentPage(page) {
      if (page < 1) {
        this.currentPage = 1;
      } else if (page > this.getTotalPages()) {
        this.currentPage = this.getTotalPages();
      } else {
        this.currentPage = page;
      }
    }
  
    getCurrentPageItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    }
  }
  
  // การใช้งาน
  const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 'Item9'];
  const pagination = new Pagination(items, 3);
  
  console.log(`Total Pages: ${pagination.getTotalPages()}`);
  pagination.setCurrentPage(1);
  console.log(`Page 1: ${pagination.getCurrentPageItems()}`);
  pagination.setCurrentPage(2);
  console.log(`Page 2: ${pagination.getCurrentPageItems()}`);
  pagination.setCurrentPage(3);
  console.log(`Page 3: ${pagination.getCurrentPageItems()}`);
  pagination.setCurrentPage(4);
  console.log(`Page 4: ${pagination.getCurrentPageItems()}`);
