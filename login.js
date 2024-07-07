class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }
  
  class AuthService {
    constructor() {
      this.users = [];
    }
  
    register(username, password) {
      const user = new User(username, password);
      this.users.push(user);
      return 'User registered successfully';
    }
  
    login(username, password) {
      const user = this.users.find(u => u.username === username && u.password === password);
      if (user) {
        return 'Login successful';
      } else {
        return 'Invalid username or password';
      }
    }
  }
  
  // การใช้งาน
  const authService = new AuthService();
  console.log(authService.register('john', 'password123')); // User registered successfully
  console.log(authService.login('john', 'password123')); // Login successful
  console.log(authService.login('john', 'wrongpassword')); // Invalid username or password
