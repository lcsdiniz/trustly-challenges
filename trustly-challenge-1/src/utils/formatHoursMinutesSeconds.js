const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
};

export default function formatDate(date) {
  const formattedDate = Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
}