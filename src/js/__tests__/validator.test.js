import Validator from '../validator';

test('Проверка создания объекта', () => {
  const obj = new Validator(' Ira2-Cool_Girl ');
  expect(obj.name).toEqual('Ira2-Cool_Girl');
  expect(obj).toBeInstanceOf(Validator);
});

const beginningName = [
  '2Ira',
  '-Ira',
  '_Ira',
];

const testBeginingNames = test.each(beginningName);
testBeginingNames('Неправильное начало имени', (name) => {
  expect(() => new Validator(name)).toThrow(
    'Имя не должно начинаться цифрами, символами подчёркивания или тире',
  );
});

const endName = [
  'Ira2',
  'Ira-',
  'Ira_',
];

const testEndNames = test.each(endName);
testEndNames('Неправильное окончание имени', (name) => {
  expect(() => new Validator(name)).toThrow(
    'Имя не должно заканчиваться цифрами, символами подчёркивания или тире',
  );
});

test('Имя содержит много цифр подряд', () => {
  expect(() => new Validator('Ira1234Cool')).toThrow(
    'Имя не должно содержать подряд более трёх цифр',
  );
});

test('Некорректное имя', () => {
  expect(() => new Validator('IraРуская')).toThrow(
    'Некорректное имя. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)',
  );
});
