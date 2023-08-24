import { Box, TextField, Button, Container } from "@mui/material";
import { useState } from "react";

export default function Cards(props) {
  const [editvalues, setEditvalues] = useState(
    props.cardValues.map(() => false)
  );
  const [edittexts, setEditTexts] = useState([...props.cardValues]);

  const handleButtonnClick = (index) => {
    const updatedEditValues = [...editvalues];
    updatedEditValues[index] = !updatedEditValues[index];
    setEditvalues(updatedEditValues);
  };

  const handleEditText = (index, newText) => {
    const updatedTexts = [...edittexts];
    updatedTexts[index] = newText;
    setEditTexts(updatedTexts);
  };

  return (
    <div>
      <Container
        sx={{
          backgroundColor: "#FFF3DA",
          border: 1,
          width: "auto",
          height: "auto",
          mt: 2,
          borderRadius: 3,
        }}
      >
        <h2 style={{ textAlign: "center", margin: "10px" }}>Today's Task</h2>
        {props.cardValues.map((value, index) => (
          <Box
            key={index} // Use index as the key
            sx={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              m: 3,
            }}
          >
            <TextField
              value={edittexts[index]}
              disabled={!editvalues[index]}
              onChange={(e) => handleEditText(index, e.target.value)}
              sx={{
                backgroundColor: "#FEBBCC",
                width: 700,
                "& input": { color: "white" },
                boxShadow: 10,
              }}
            ></TextField>
            <Button
              sx={{ ml: 2, mr: 3 }}
              variant="outlined"
              onClick={() => handleButtonnClick(index)}
            >
              {editvalues[index] ? "ok" : "Edit"}
            </Button>
            <Button variant="outlined">Delete</Button>
          </Box>
        ))}
      </Container>
    </div>
  );
}
