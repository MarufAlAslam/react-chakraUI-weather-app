import React, { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard";

const ApiHandler = () => {
  const [location, setLocation] = useState("Dhaka");
  const dataURL = `https://api.weatherapi.com/v1/current.json?key=249ddbe1dadd427bb5a121401231903&q=${location}&aqi=yes`;

  const [weatherData, setWeatherData] = useState({});

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

  useEffect(() => {}, []);
  return (
    <div>
      <WeatherCard weatherData={weatherData} setLocation={setLocation} />
    </div>
  );
};

export default ApiHandler;
