import { Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import HistoryCard from "../historyCard";

const WeatherCard = ({ weatherData, setLocation, historyData }) => {
  const [cel, setCel] = useState(true);
  const scaleHandler = () => {
    setCel(!cel);
  };
  const locationHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    setLocation(location);
  };
  return (
    <div>
      <Card marginBottom="20px" bg={"#D5E0FF"}>
        <CardBody>
          <FormControl>
            <form action="" onSubmit={locationHandler}>
              <Flex align={"center"}>
                <Input
                  bg={"white"}
                  placeholder={`Search By Location Name: Default is ${weatherData.location?.name}`}
                  name="location"
                ></Input>
                <Button type="submit">
                  <Search2Icon />
                </Button>
              </Flex>
            </form>
          </FormControl>
        </CardBody>
      </Card>
      <Card minWidth="550px" textAlign="center" bg={"#D5E0FF"}>
        <CardBody>
          <Flex justify="center" align="center">
            <Text fontSize="4xl" fontWeight="bold">
              {weatherData.location?.name || "Not Found"}
            </Text>{" "}
            <Flex
              justify={"center"}
              align="center"
              fontSize="2xl"
              fontWeight="semibold"
              marginTop="5px"
            >
              <Text marginLeft={"10px"} marginRight={"10px"}>
                (
                {cel
                  ? `${weatherData.current?.temp_c || 0}°C`
                  : `${weatherData.current?.temp_f || 0}°F`}
                )
              </Text>
              <Button onClick={scaleHandler} bg="#673EE5" color={"white"}>
                {cel ? "convert to °F" : "convert to °C"}
              </Button>
            </Flex>
          </Flex>

          <Text fontSize="3xl">{weatherData.location?.country}</Text>
          <Divider marginTop="10px" marginBottom="10px" />
          <Card bg="#00000050">
            <CardBody>
              <Text color={"white"} fontSize="20px">
                Current Time: {weatherData?.location?.localtime || "Not Found"}
              </Text>
              <Text color={"white"} fontSize="20px">
                Sunrise:{" "}
                {historyData.forecast?.forecastday[0].astro.sunrise ||
                  "Not Found"}
              </Text>
              <Text color={"white"} fontSize="20px">
                Sunset:{" "}
                {historyData.forecast?.forecastday[0].astro.sunset ||
                  "Not Found"}
              </Text>
            </CardBody>
          </Card>
          <Divider marginTop="10px" marginBottom="10px" />
          <Card bg="#00000050">
            <CardBody>
              <Text fontSize="xl" color="white" fontWeight="bold">
                Current Condition
              </Text>
              <Flex justify="center" align="center">
                <img src={weatherData?.current?.condition?.icon} alt="" />
                <Text color="white" fontSize={"20px"}>
                  {weatherData?.current?.condition?.text}
                </Text>
              </Flex>
            </CardBody>
          </Card>
          <Divider marginTop="10px" marginBottom="10px" />
          <HistoryCard historyData={historyData} />
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherCard;
