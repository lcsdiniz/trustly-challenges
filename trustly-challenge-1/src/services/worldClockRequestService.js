export default async function worldClockRequestService(selectedTimeZone) {
  const response = await fetch(`http://worldclockapi.com/api/json/${selectedTimeZone}/now`);
  const timeData = await response.json();

  return timeData;
}