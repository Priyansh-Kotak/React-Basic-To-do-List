// import { Box } from "@mui/material";
import Input from "../src/Components/Input";
import Header from "../src/Components/Header/Header";
import { Box } from "@mui/material";
import Footer from "../src/Components/Footer/Footer";
function App() {
  return (
    <div >
      <Box sx={{ m: 3 }}>
        <Header />
      </Box>
      <Input />
      <Box sx={{ mt: 10}}>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
