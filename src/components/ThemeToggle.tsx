import React from "react";
import Button from "@material-ui/core/Button";
import { useGlobal } from "../context";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

export default function ThemeToggle() {
  const [{ theme }, dispatch] = useGlobal();
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() =>
          dispatch({
            type: "updateTheme",
            theme: theme === "light" ? "dark" : "light",
          })
        }
      >
        {theme === "light" ? <Brightness2Icon /> : <WbSunnyIcon />}
      </Button>
    </div>
  );
}
