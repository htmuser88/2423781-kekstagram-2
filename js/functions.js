/**
 * Переводит строку времени (H:M) в количество минут с начала суток
 * @param {string} timeString - время в формате "HH:mm"
 * @returns {number} - общее количество минут
 */
const parseTimeToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

/**
 * Проверяет, умещается ли встреча в рабочий график
 * @param {string} startDay - начало рабочего дня
 * @param {string} endDay - конец рабочего дня
 * @param {string} startMeeting - начало встречи
 * @param {number} duration - длительность встречи в минутах
 * @returns {boolean}
 */
const isMeetingInWorkingHours = (startDay, endDay, startMeeting, duration) => {
  const startDayMinutes = parseTimeToMinutes(startDay);
  const endDayMinutes = parseTimeToMinutes(endDay);
  const startMeetingMinutes = parseTimeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + duration;

  // Встреча должна начаться не раньше начала дня
  // и закончиться не позже конца рабочего дня
  return startMeetingMinutes >= startDayMinutes && endMeetingMinutes <= endDayMinutes;
};

// Проверки:
// eslint-disable-next-line no-console
console.log(isMeetingInWorkingHours('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console
console.log(isMeetingInWorkingHours('8:0', '10:0', '8:0', 120)); // true
// eslint-disable-next-line no-console
console.log(isMeetingInWorkingHours('08:00', '14:30', '14:00', 90)); // false
// eslint-disable-next-line no-console
console.log(isMeetingInWorkingHours('14:00', '17:30', '08:0', 90)); // false
// eslint-disable-next-line no-console
console.log(isMeetingInWorkingHours('8:00', '17:30', '08:00', 900)); // false
