import { Box, Button, TextField } from "@mui/material";
import Cards from "./Cards";
import { useState } from "react";

const Input = (props) => {
  const [text, setText ] = useState('');
  const [showCards,setShowCards] = useState(false);
  const [cardsValue,setCardsValue] = useState([]);
  



  const handleTextChange =(event) =>{
    setText(event.target.value);
  }

  const handleButtonnClick=()=>{


    setShowCards(true);
    setCardsValue((preValue)=>[...preValue,text]);
    setText('');
  }
  return (
    <div>
      <Box
        sx={{
          display: "flex",

          flexDirection: "column",
          alignItems: "centre",
          justifyContent: "center",
          height: 100,
          width: 500,
          p: 5, 
          mx: "auto",
          // border : 2,
          borderRadius: 4,
          boxShadow: 10,
          mt: 5,
        }}
      >
        <TextField
          label="Course Goal"
          id="outlined-size-normal"
          sx={{ mb: 2, width: 500 }}
          value={text}
          onChange={handleTextChange}
        />
        <Button variant="contained" size="small " sx={{ width: 100 }} onClick={handleButtonnClick}>
          Submit
        </Button>

      </Box>

      <Box>
        {showCards && <Cards cardValues={cardsValue} ></Cards>}
      </Box>
    </div>
  );
};

export default Input;
