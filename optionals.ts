function printIngredient(quantiy: string, ingredient: string, extra?: string) {
  console.log(`${quantiy} ${ingredient}`);
}

printIngredient("1Cup", "Flour");
printIngredient("1Cup", "Flour", "Sugar");
