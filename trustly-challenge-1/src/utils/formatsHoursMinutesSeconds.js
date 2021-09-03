const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
};

// Formats the date into -> HH:MM:SS AM/PM
export default function formatsHoursMinutesSeconds(dateTimezonedInMiliseconds) {
  const formattedDate = Intl.DateTimeFormat("en-US", options).format(dateTimezonedInMiliseconds);

  return formattedDate;
}