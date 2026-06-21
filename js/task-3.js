class StringBuilder {
  // Объявляем приватное свойство #value
  #value;

  // Конструктор принимает начальную строку
  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Метод возвращает текущее значение приватного свойства
  getValue() {
    return this.#value;
  }

  // Добавляет строку в конец
  padEnd(str) {
    this.#value += str;
  }

  // Добавляет строку в начало
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Добавляет строку и в начало, и в конец
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// Код проверки:
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."

builder.padStart('^');
console.log(builder.getValue()); // "^."

builder.padEnd('^');
console.log(builder.getValue()); // "^.^"

builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
