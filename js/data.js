import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const PHOTO_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MAX_COUNT = 30;
const AVATAR_COUNT = 6;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы первым делом снимать из неё лишние предметы.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота.',
  'Лица у людей на фотке скучные, как будто их заставили сниматься.',
];

const NAMES = ['Артём', 'Мария', 'Виктор', 'Юлия', 'Иван', 'Елена'];

const DESCRIPTIONS = [
  'Прекрасный вид',
  'Мой завтрак',
  'Отдыхаем',
  'Рабочий процесс',
  'Путешествие',
];

const generateCommentId = createIdGenerator();

const createMessage = () => {
  const count = getRandomInteger(1, 2);
  return Array.from({ length: count }, () => getRandomArrayElement(MESSAGES)).join(' ');
};

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({ length: getRandomInteger(0, COMMENT_MAX_COUNT) }, createComment),
});

const getPhotoDescriptions = () => Array.from({ length: PHOTO_COUNT }, (_, index) => createPhotoDescription(index + 1));

export { getPhotoDescriptions };
