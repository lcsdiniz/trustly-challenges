const options = { 
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

export default function formatDate(date) {
  const formattedDate = Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
}