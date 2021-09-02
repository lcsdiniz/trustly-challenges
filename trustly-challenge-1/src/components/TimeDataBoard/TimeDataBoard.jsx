import './styles.css';

export default function TimeDataBoard({ timeData, isLoading }) {
  const { currentDateTime, timeHours, timeZoneName} = timeData;

  return (
    <main>
        {
          isLoading 
            ? (
              'Loading...'
            ) : (
            timeData && (
              <>
                {currentDateTime}
                <br />
                {timeHours} - {timeZoneName}
              </>
            )
          )
        }
      </main>
  )
}