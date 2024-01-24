import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import data from "../mock/dummyTransactions";
import formatDate from "../utils/formatDate";

const DateFilter = (props) => {
  let fromDateValue;
  let toDateValue;

  const checkValidation = () => {
    if (fromDateValue && toDateValue) {
      const filteredData = data.filter(
        (d) =>
          formatDate(d.date) > fromDateValue && formatDate(d.date) < toDateValue
      );
      props.setNewData(filteredData);
    }
    return false;
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "from") {
      fromDateValue = value;
    } else if (e.target.name === "to") {
      toDateValue = value;
    }
    checkValidation();
  };

  return (
    <Box sx={{ display: "flex" }}>
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
        <InputLabel id="simple-select-label">From</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={fromDateValue}
          label="From"
          name="from"
          onChange={handleChange}
        >
          {data.map((item, id) => {
            let newDate = formatDate(item?.date);
            return <MenuItem value={newDate}>{newDate}</MenuItem>;
          })}
        </Select>
      </FormControl>
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
        <InputLabel id="simple-select-label">To</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={toDateValue}
          label="To"
          name="to"
          onChange={handleChange}
        >
          {data.map((item, id) => {
            let newDate = formatDate(item?.date);
            return <MenuItem value={newDate}>{newDate}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DateFilter;
