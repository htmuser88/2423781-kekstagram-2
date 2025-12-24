// Находим контейнер для фотографий
const picturesContainer = document.querySelector('.pictures');
// Находим шаблон и его содержимое
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

/**
 * Создает одну миниатюру на основе данных
 * @param {Object} data — объект с данными фотографии (id, url, description, likes, comments)
 * @returns {HTMLElement} — заполненный DOM-элемент
 */
const createThumbnail = ({ url, description, likes, comments }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  // Заполняем данные
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

/**
 * Отрисовывает массив миниатюр на страницу
 * @param {Array} photos — массив объектов фотографий
 */
const renderThumbnails = (photos) => {
  // Используем фрагмент для оптимизации (минимизируем перерисовки страницы)
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    fragment.appendChild(thumbnail);
  });

  // Добавляем все элементы из фрагмента в контейнер одним действием
  picturesContainer.appendChild(fragment);
};

export { renderThumbnails };
