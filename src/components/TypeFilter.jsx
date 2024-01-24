import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import data from "../mock/dummyTransactions";

const TypeFilter = (props) => {
  let selectedType;
  const types = ["Full", "Short"];

  const checkBranch = () => {
    if (selectedType) {
      const filteredData = data.filter((d) => d.type === selectedType);
      props.setNewData(filteredData);
    }
    return false;
  };

  const handleChange = (e) => {
    selectedType = e.target.value;
    checkBranch();
  };

  return (
    <Box>
      <FormControl
        sx={{
          minWidth: 120,
          margin: "1rem 1rem",
          ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            {
              padding: ".8rem .725rem",
            },
        }}
      >
        <InputLabel id="simple-select-label">
          {selectedType ? selectedType : "Type"}
        </InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={selectedType}
          label="type"
          name="type"
          onChange={handleChange}
        >
          {types.map((item, id) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TypeFilter;
