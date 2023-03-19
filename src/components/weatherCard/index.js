import {
  Card,
  CardBody,
  Center,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const WeatherCard = ({ weatherData, setLocation }) => {
  const locationHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    setLocation(location);
  };
  return (
    <div>
      <Card marginBottom="20px">
        <CardBody>
          <FormControl>
            <form action="" onSubmit={locationHandler}>
              <Input
                placeholder="Search By Location Name:"
                name="location"
              ></Input>
            </form>
          </FormControl>
        </CardBody>
      </Card>
      <Card minWidth="550px" textAlign="center">
        <CardBody>
          <Flex justify="center" align="center">
            <Text fontSize="5xl" fontWeight="bold">
              {weatherData.location?.name}
            </Text>{" "}
            <Text fontSize="3xl" fontWeight="semibold" marginTop="5px">
              ( {weatherData.current?.temp_c}°C)
            </Text>
          </Flex>
          <Text fontSize="3xl">{weatherData.location?.country}</Text>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherCard;
