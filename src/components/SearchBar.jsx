import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import data from "../mock/dummyTransactions";
import { Button } from "@mui/material";

export default function SeacrhBar(props) {
  const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSearch = () => {
    const filteredData = data.filter((item) => item.payment_id === value);
    if (filteredData.length > 0) {
      props.setNewData(filteredData);
      setError(false);
    } else if (filteredData.length <= 0) {
      setError(true);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        error={error}
        id="outlined-search"
        label="Search ID"
        type="number"
        helperText={error ? "Incorrect ID." : null}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
      <Button
        variant="contained"
        sx={{
          margin: "auto 1rem",
          background: "#e31837",
          "&:hover": {
            background: "#e31832",
          },
        }}
        disabled={value === ""}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
}
