export class User2 {
  private name: string;
  private age: number;

  constructor(nameC: string, ageC: number) {
    // to make sure that a new user is created with a valid age
    if (ageC <= 0 || ageC > 120) {
      throw new Error("Invalid age");
    }

    this.name = nameC;
    this.age = ageC;

    console.log(`user ${this.name} created with age${this.age}`);
  }

  // to change private property
  changeAge(newAge: number) {
    if (newAge <= 0 || newAge > 120) {
      throw new Error("Invalid age");
    }

    this.age = newAge;
  }
}

const user1 = new User2("User1", 30);

// not possible due to private member
// not good changing class property directly
// user1.age = 33;

user1.changeAge(33);
console.log(user1);
