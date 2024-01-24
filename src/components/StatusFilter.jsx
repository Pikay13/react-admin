import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import data from "../mock/dummyTransactions";

const StatusFilter = (props) => {
  let selectedStatus;
  const status = ["Approved", "Pending", "Rejected"];

  const checkStatus = () => {
    if (selectedStatus) {
      const filteredData = data.filter((d) => d.status === selectedStatus);
      props.setNewData(filteredData);
    }
    return false;
  };

  const handleChange = (e) => {
    selectedStatus = e.target.value;
    checkStatus();
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
          {selectedStatus ? selectedStatus : "Status"}
        </InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={selectedStatus}
          label="type"
          name="type"
          onChange={handleChange}
        >
          {status.map((item, id) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default StatusFilter;
