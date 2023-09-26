export default class Validator {
  constructor(text) {
    this.validateUsername(text);
  }

  validateUsername(text) {
    const str = text.trim();
    if (/^[a-zA-Z\-_0-9]+$/.test(str)) {
      const regexp = /^(\d*-*_*)|([0-9]{4})|(\d{0,1}|-{0,1}|_{0,1})$/g;
      const result = str.match(regexp);
      if (result[0]) {
        throw Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
      }
      if (result[1].length > 3) {
        throw Error('Имя не должно содержать подряд более трёх цифр');
      }
      if (result[1]) {
        throw Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
      }
      this.name = str;
    } else {
      throw Error('Некорректное имя. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
  }
}
