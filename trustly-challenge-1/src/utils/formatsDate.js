const options = { 
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

// Formats the date into -> Weekday, Month Day, Year
export default function formatsDate(dateTimezonedInMiliseconds) {
  const formattedDate = Intl.DateTimeFormat("en-US", options).format(dateTimezonedInMiliseconds);

  return formattedDate;
}