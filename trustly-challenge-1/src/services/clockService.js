import convertHMSStringToMiliseconds from '../utils/convertHMSStringToMiliseconds';
import formatDate from '../utils/formatDate';
import formatHoursMinutesSeconds from '../utils/formatHoursMinutesSeconds';

export default async function clockService(selectedTimeZone) {
  const response = await fetch(`http://worldclockapi.com/api/json/${selectedTimeZone}/now`);
  const timeData = await response.json();

  const { dayOfTheWeek, timeZoneName, utcOffset } = timeData;

  const dateNow = new Date();
  const dateNowInMiliseconds = dateNow.getTime();
  const currentOffsetInMiliseconds = dateNow.getTimezoneOffset() * 60 * 1000;
  
  const requestTimeZoneOffsetInMiliseconds = convertHMSStringToMiliseconds(utcOffset);
  const differenceBetweenTimezonesInMiliseconds = currentOffsetInMiliseconds + requestTimeZoneOffsetInMiliseconds;

  const dateTimezonedInMiliseconds = dateNowInMiliseconds + differenceBetweenTimezonesInMiliseconds;

  const timeObject = {
    currentDateTime: formatDate(dateTimezonedInMiliseconds),
    dayOfTheWeek,
    timeZoneName,
    timeHours: formatHoursMinutesSeconds(dateTimezonedInMiliseconds)
  }

  return timeObject;
}