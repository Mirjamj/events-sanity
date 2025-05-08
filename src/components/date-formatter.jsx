// DateFormatter component – formats a given date string into Swedish (sv-SE)
// Example output: "2025-05-08 14:30"
const DateFormatter = ({ date, className }) => {
  return (
    <p className={className}>
      {new Intl.DateTimeFormat('sv-SE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date(date))}
    </p>
  )
}

export default DateFormatter;