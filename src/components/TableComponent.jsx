import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Toolbar,
  Typography,
  Tooltip,
  Divider,
  TableHead,
} from "@mui/material";
import data from "../mock/dummyTransactions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import formatDate from "../utils/formatDate";
import DateFilter from "./DateFilter";
import BranchFilter from "./BranchFilter";
import TypeFilter from "./TypeFilter";
import StatusFilter from "./StatusFilter";
import tableHeaders from "../mock/tableHeaders";

const TableComponent = () => {
  const [selected, setSelected] = useState([]);
  const [newData, setNewData] = useState(data || "");

  function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numSelected > 0 && {
              bgcolor: "#e9e9e9",
            }),
            width: "100%",
          }}
        >
          {numSelected > 0 ? (
            <Typography
              sx={{ flex: "1 1 100%" }}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
              {numSelected} selected
            </Typography>
          ) : (
            <Typography
              sx={{ flex: "1 1 100%" }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              List of payments
            </Typography>
          )}

          {numSelected > 0 ? (
            <Tooltip title="Delete" sx={{}}>
              <IconButton
                sx={{
                  color: "#e31837",
                  // mr: { xs: "1rem", sm: "3rem", md: "3rem", xl: "3rem" },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : null}
        </Toolbar>

        <DateFilter setNewData={setNewData} />
        <BranchFilter setNewData={setNewData} />
        <TypeFilter setNewData={setNewData} />
        <StatusFilter setNewData={setNewData} />
        <Button
          variant="contained"
          sx={{
            height: "2rem",
            width: "1.5rem",
            margin: "auto 1rem",
            background: "#231f20",
            "&:hover": {
              background: "#333",
              opacity: 8,
            },
          }}
          onClick={() => {
            setSelected([]);
            setNewData(data);
          }}
        >
          Clear
        </Button>
      </Box>
    );
  }

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Box
      sx={{
        width: "100%",
        mt: { md: "4rem", xs: "3.5rem" },
        overflow: "hidden",
      }}
    >
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Divider />
        <Divider />
        <TableContainer>
          <Table
            sx={{ minWidth: 750, padding: "1rem 1rem" }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHead>
              <TableRow>
                {tableHeaders.map((column) => (
                  <TableCell key={column.id} align={"center"}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {newData.map((row) => {
                const isItemSelected = isSelected(row.id);

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    {tableHeaders.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={"center"}>
                          {column.id === "date" ? formatDate(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableComponent;
