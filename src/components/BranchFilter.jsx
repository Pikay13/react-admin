import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import data from "../mock/dummyTransactions";

const BranchFilter = (props) => {
  let selectedBranch;

  const checkBranch = () => {
    if (selectedBranch) {
      const filteredData = data.filter((d) => d.branch === selectedBranch);
      props.setNewData(filteredData);
    }
    return false;
  };

  const handleChange = (e) => {
    selectedBranch = e.target.value;
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
          {selectedBranch ? selectedBranch : "Branch"}
        </InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={selectedBranch}
          label="Branch"
          name="branch"
          onChange={handleChange}
        >
          {data.map((item, id) => {
            return <MenuItem value={item.branch}>{item.branch}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BranchFilter;
