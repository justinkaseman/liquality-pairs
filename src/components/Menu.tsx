import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import SettingsIcon from "@material-ui/icons/Settings";
import { useGlobal } from "../context";

export default function SimpleMenu() {
  const [{ refreshRate }, dispatch] = useGlobal();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch({ type: "updateRefreshRate", rate: event.target.value as number });
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SettingsIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleClose}>
          <FormControl>
            <InputLabel id="demo-simple-select-placeholder-label-label">
              Refresh every
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={refreshRate}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value={5}>5 seconds</MenuItem>
              <MenuItem value={10}>10 seconds</MenuItem>
              <MenuItem value={15}>15 seconds</MenuItem>
            </Select>
          </FormControl>
        </MenuItem>
      </Menu>
    </div>
  );
}
