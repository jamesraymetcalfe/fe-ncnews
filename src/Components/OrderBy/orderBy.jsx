import "./OrderBy.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const OrderBy = ({ order, setOrderBy }) => {
  const handleChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <section className="ordering-buttons">
      <ToggleButtonGroup
        value={order}
        onChange={handleChange}
        aria-label="order list ascending or descending"
      >
        <ToggleButton value="DESC" aria-label="descending">
          Descending
        </ToggleButton>
        <ToggleButton value="ASC" aria-label="ascending">
          Ascending
        </ToggleButton>
      </ToggleButtonGroup>
    </section>
  );
};
