import { Box, TextField, Button, Container } from "@mui/material";
import { useState, useEffect } from "react";

export default function Cards(props) {
  const [editvalues, setEditvalues] = useState(
    props.cardValues.map(() => false)
  );
  const [edittexts, setEditTexts] = useState(
    props.cardValues.map((card) => card.title)
  );

  useEffect(() => {
    setEditvalues(props.cardValues.map(() => false));
    setEditTexts(props.cardValues.map((card) => card.title));
  }, [props.cardValues]);

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

  const handleDeleteButton = (index) => {
    const updatedCardValues = props.cardValues.filter((_, i) => i !== index);
    props.updateCardValues(updatedCardValues);
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}`;
  console.log(formattedDate);

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
        <h2 style={{ textAlign: "center", margin: "10px" }}>Today's Task  ({formattedDate})</h2>
        {props.cardValues.map((value, index) => (
          <Box
            key={value.id}
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
                color: "white",
              }}
            />
            <Button
              sx={{ ml: 2, mr: 3 }}
              variant="outlined"
              onClick={() => handleButtonnClick(index)}
            >
              {editvalues[index] ? "ok" : "Edit"}
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleDeleteButton(index)}
            >
              Delete
            </Button>
          </Box>
        ))}
      </Container>
    </div>
  );
}
