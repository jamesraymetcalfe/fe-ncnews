import "./SortBy.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

export const SortBy = ({ sort_by, setSortBy }) => {
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    if (sort_by) {
      setSelectValue(sort_by);
    }
  }, [sort_by]);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section className="sorting-buttons">
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="sortBy-select">ARRANGE BY</InputLabel>
        <Select
          labelId="sortBy-select"
          value={selectValue}
          label="sortBy"
          onChange={handleChange}
        >
          <MenuItem value="created_at">Created at</MenuItem>
          <MenuItem value="comment_count">Comment Count</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
};
