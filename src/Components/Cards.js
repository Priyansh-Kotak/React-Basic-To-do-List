import { Box, TextField } from "@mui/material";

export default function Cards(props) {
  return (
    <div>
      <h2 style={{textAlign:"center", margin:'10px'}}>Today's Task</h2>
      {props.cardValues.map((value, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          m: 5,
        }}
      >
        
        <TextField
        value={value}
        
        aria-readonly
          sx={{
            backgroundColor: "violet",
            width: 700,
            "& input": { color: "white" },
            boxShadow:10
          }}
        >
         
        </TextField>
      </Box>
      ))}
    </div>
  );
}
