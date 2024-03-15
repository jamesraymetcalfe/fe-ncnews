import "./OrderBy.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const OrderBy = ({ setOrderBy }) => {
  return (
    <section className="ordering-buttons">
      <ButtonGroup variant="outlined" id="order-by">
        <Button onClick={() => setOrderBy("DESC")}>descending</Button>
        <Button onClick={() => setOrderBy("ASC")}>ascending</Button>
      </ButtonGroup>
    </section>
  );
};
