const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return (this._meal = mealToCheck);
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return (this._price = priceToCheck);
      }
    },
    get todaySpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for ${this._price}`;
      } else {
        ("Meal or price was not set correctly!");
      }
    },
  };
  
  menu.meal = "pizza";
  menu.price = 8;
  console.log(menu.todaySpecial);
  