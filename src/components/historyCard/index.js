import {
  Card,
  CardBody,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const HistoryCard = ({ historyData }) => {
  // get today's date
  const today = new Date().toISOString().slice(0, 10).replaceAll("-", "/");
  return (
    <Card bg="#00000050">
      <CardBody>
        <Text fontSize="xl" color="white" fontWeight="bold">
          History - {today}
        </Text>
        <Table bg={"#D5E0FF"} marginTop="20px" textAlign="left">
          <Tbody>
            <Tr>
              <Td textAlign="left" fontSize="md">
                Maximum Temperature
              </Td>
              <Td textAlign="left" fontSize="md">
                {historyData.forecast?.forecastday[0].day.maxtemp_c || 0}°C
                &nbsp; || &nbsp;
                {historyData.forecast?.forecastday[0].day.maxtemp_f || 0}°F
              </Td>
            </Tr>
            <Tr>
              <Td textAlign="left" fontSize="md">
                Minimum Temperature
              </Td>
              <Td textAlign="left" fontSize="md">
                {historyData.forecast?.forecastday[0].day.mintemp_c || 0}°C
                &nbsp; || &nbsp;
                {historyData.forecast?.forecastday[0].day.mintemp_f || 0}°F
              </Td>
            </Tr>
            <Tr>
              <Td textAlign="left" fontSize="md">
                Average Temparature
              </Td>
              <Td textAlign="left" fontSize="md">
                {historyData.forecast?.forecastday[0].day.avgtemp_c || 0}°C
                &nbsp; || &nbsp;
                {historyData.forecast?.forecastday[0].day.avgtemp_f || 0}°F
              </Td>
            </Tr>
            <Tr>
              <Td textAlign="left" fontSize="md">
                Condition
              </Td>
              <Td textAlign="left" fontSize="md">
                <Flex align={"center"} justify="start">
                  {historyData.forecast?.forecastday[0].day.condition.icon && (
                    <img
                      src={
                        historyData.forecast?.forecastday[0].day.condition.icon
                      }
                      alt=""
                    />
                  )}
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
