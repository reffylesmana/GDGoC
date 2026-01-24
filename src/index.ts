interface User {
  id: number;
  username: string;
  email: string;
}

class UserAccount implements User {
  id: number;
  username: string;
  email: string;

  constructor(id: number, username: string, email: string) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  getProfile(): string {
    return `Username: ${this.username}, Email: ${this.email}`;
  }
}

const user = new UserAccount(1, "reffy", "reffy@example.com");
console.log(user.getProfile());
