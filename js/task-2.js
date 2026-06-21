class Storage {
  // Объявляем приватное свойство #items
  #items;

  // Конструктор принимает начальный масив товаров
  constructor(initialItems) {
    this.#items = initialItems;
  }

  // Метод возвращает массив текущих товаров
  getItems() {
    return this.#items;
  }

  // Метод добавляет новый товар в массив
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Метод удаляет товар из массива, если он там есть
  removeItem(itemToRemove) {
    // Находим индекс элемента в массиве
    const itemIndex = this.#items.indexOf(itemToRemove);

    // Если элемент найден (индекс не равен -1), удаляем его
    if (itemIndex !== -1) {
      this.#items.splice(itemIndex, 1);
    }
  }
}

// Код проверки:
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
