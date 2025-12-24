const PHOTO_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MAX_COUNT = 30;
const AVATAR_COUNT = 6;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы первым делом снимать из неё лишние предметы. Тот самый случай, когда излишний фон — это беда.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке скучные, как будто их заставили сниматься. Никакого сплочения вокруг идеи.',
];

const NAMES = ['Артём', 'Мария', 'Виктор', 'Юлия', 'Иван', 'Елена', 'Алексей', 'Наталья'];

const DESCRIPTIONS = [
  'Прекрасный вид на закат',
  'Мой завтрак сегодня',
  'Отдыхаем с друзьями',
  'Рабочий процесс кипит',
  'Маленькое путешествие',
  'Осеннее настроение',
];

// Генерация случайного числа в диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

// Создание генератора уникальных ID (замыкание)
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Создание текста комментария (1 или 2 предложения)
const createMessage = () => {
  const count = getRandomInteger(1, 2);
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(getRandomArrayElement(MESSAGES));
  }
  return result.join(' ');
};

// Создание объекта комментария
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

// Создание объекта фотографии
const createPhotoDescription = (id) => ({
  id: id,
  url: `photos/${id}.js`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(0, COMMENT_MAX_COUNT)}, createComment),
});

// Итоговая функция для получения массива из 25 объектов
const getPhotoDescriptions = () => Array.from({length: PHOTO_COUNT}, (_, index) => createPhotoDescription(index + 1));

// Вызов функции для проверки
const photoArray = getPhotoDescriptions();
// eslint-disable-next-line no-console
console.log(photoArray);
