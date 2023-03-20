import React, { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard";

const ApiHandler = () => {
  const [location, setLocation] = useState("Dhaka");
  const today = new Date().toISOString().slice(0, 10);
  const dataURL = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=yes`;
  // https://api.weatherapi.com/v1/history.json?key=249ddbe1dadd427bb5a121401231903&q=Dhaka&aqi=yes&dt=2023-03-20
  const historyURL = `https://api.weatherapi.com/v1/history.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=yes&dt=${today}`;

  const [weatherData, setWeatherData] = useState({});
  const [historyData, setHistoryData] = useState({});

  useEffect(() => {
    fetch(dataURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, [dataURL]);

  useEffect(() => {
    fetch(historyURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHistoryData(data);
      });
  }, [historyURL]);

  console.log("historyData:" + historyData);

  useEffect(() => {}, []);
  return (
    <div>
      <WeatherCard
        weatherData={weatherData}
        setLocation={setLocation}
        historyData={historyData}
      />
    </div>
  );
};

export default ApiHandler;
