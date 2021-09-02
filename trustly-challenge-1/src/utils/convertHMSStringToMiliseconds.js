export default function convertHMSStringToMiliseconds(timeString) {
  const timeArray = timeString.split(":");
  const hourInSeconds = Number(timeArray[0]) * 3600;
  const minutesInSeconds = Number(timeArray[1]) * 60;
  const seconds = Number(+timeArray[2]);
  
  const miliseconds = (hourInSeconds + minutesInSeconds + seconds) * 1000;

  return miliseconds;
}