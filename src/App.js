import { ChakraProvider } from "@chakra-ui/react";
import Main from "./pages/main";

import "./index.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Main />
      </div>
    </ChakraProvider>
  );
}

export default App;
