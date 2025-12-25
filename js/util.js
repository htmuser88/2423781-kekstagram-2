// Функция для получения случайного целого числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

// Функция для выбора случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Генератор уникальных ID
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

export { getRandomInteger, getRandomArrayElement, createIdGenerator };
