/*================== Пример 1. - Проверка длины строки ====================*/

/**
 * Проверяет, не превышает ли строка максимально допустимую длину.
 * @param {string} str - Строка для проверки.
 * @param {number} maxLength - Максимально допустимая длина.
 * @returns {boolean} - true, если строка подходит, иначе false.
 */
const checkStringLength = (str, maxLength) => str.length <= maxLength;

// eslint-disable-next-line no-console
console.log(checkStringLength('Привет мир!', 20)); // true (длина 11)
// eslint-disable-next-line no-console
console.log(checkStringLength('Привет мир!', 5)); // false (длина 11)

// Использование при валидации поля ввода
const comment = 'Это мой первый комментарий на сайте.';
const MAX_COMMENT_LENGTH = 140;

if (checkStringLength(comment, MAX_COMMENT_LENGTH)) {
  // eslint-disable-next-line no-console
  console.log('Текст прошел проверку');
} else {
  // eslint-disable-next-line no-console
  console.log('Текст слишком длинный!');
}


/*================== Пример 2. - Палиндром       ====================*/

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9а-яё]/gi, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}
// eslint-disable-next-line no-console
console.log(isPalindrome('А роза упала на лапу Азора')); //


/**================== Пример 3. -  Функция принимает строку,
                                    извлекает содержащиеся в ней
                                    цифры от 0 до 9 и возвращает их в
                                    виде целого положительного числа
                                                  ====================*/

// извлечение цифр из строки
function extractNumber(input) {
  const str = String(input);
  const digits = str.replace(/\D/g, '');
  return digits === '' ? NaN : parseInt(digits, 10);
}
// eslint-disable-next-line no-console
console.log(extractNumber('2023 год')); // 2023
// eslint-disable-next-line no-console
console.log(extractNumber('ECMAScript 2025')); // 2025
// eslint-disable-next-line no-console
console.log(extractNumber('1.5 кг')); // 15 (извлекает все цифры подряд)
// eslint-disable-next-line no-console
console.log(extractNumber('агент 007')); // 7 (parseInt уберет ведущие нули)
// eslint-disable-next-line no-console
console.log(extractNumber('текст без цифр')); // NaN
