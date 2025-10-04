class User {
  name: string;
  age: number;

  constructor(nameC: string, ageC: number) {
    this.name = nameC;
    this.age = ageC;

    console.log(`user ${this.name} created with age${this.age}`);
  }
}

const user1 = new User("User1", 30);
const user2 = new User("User2", 35);
