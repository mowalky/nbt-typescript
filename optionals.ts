function printIngredient(quantiy: string, ingredient: string, extra?: string) {
  console.log(`${quantiy} ${ingredient}`);
}

printIngredient("1Cup", "Flour");
printIngredient("1Cup", "Flour", "Sugar");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user.info?.email || "";
}
