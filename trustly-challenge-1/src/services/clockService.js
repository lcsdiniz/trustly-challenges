import convertHMSStringToMiliseconds from '../utils/convertHMSStringToMiliseconds';
import formatDate from '../utils/formatsDate';
import formatHoursMinutesSeconds from '../utils/formatsHoursMinutesSeconds';
import worldClockRequestService from './worldClockRequestService';

export default async function clockService(selectedTimeZone) {
  try {
    const timeData = await worldClockRequestService(selectedTimeZone);
    
    const { dayOfTheWeek, timeZoneName, utcOffset } = timeData;

    // Discovers the browser's current Timezone 
    const dateNow = new Date();
    const dateNowInMiliseconds = dateNow.getTime();
    const currentOffsetInMiliseconds = dateNow.getTimezoneOffset() * 60 * 1000;
    
    // Calculates the difference between the current Timezone and the one of the request
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
  } catch (error) {
    throw new Error('Request failed')
  }
}