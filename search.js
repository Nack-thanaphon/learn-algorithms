class SearchService {
    constructor(data) {
      this.data = data;
    }
  
    search(query) {
      return this.data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    }
  }
  
  // การใช้งาน
  const data = ['apple', 'banana', 'grape', 'orange', 'pineapple'];
  const searchService = new SearchService(data);
  
  console.log(searchService.search('ap')); // ['apple', 'grape', 'pineapple']
  console.log(searchService.search('an')); // ['banana', 'orange']
  console.log(searchService.search('berry')); // []
