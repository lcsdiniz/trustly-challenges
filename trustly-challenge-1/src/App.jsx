import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import TimeDataBoard from './components/TimeDataBoard';
import clockService from './services/clockService';
import './App.css';

function App() {
  const [timeData, setTimeData] = useState(null);
  const [selectedTimeZoneName, setSelectedTimeZoneName] = useState('utc');
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchClock = useCallback(async () => {
    setIsLoading(true)
    try {
      const time = await clockService(selectedTimeZoneName);
      setTimeData(time);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedTimeZoneName]);

  useEffect(() => {
    fetchClock()
  }, [selectedTimeZoneName, fetchClock]);
  
  return (
    <div className="container">
      <Header changeSelectedTimeZone={setSelectedTimeZoneName} />
      <TimeDataBoard timeData={timeData} isLoading={isLoading} />
    </div>
  );
}

export default App;
