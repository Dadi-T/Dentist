import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
//LIST

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import { Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
export default function DrawerComponent() {
  const [openState, setOpenState] = React.useState(false);
  const styles = {
    "&.MuiButton-root": {
      backgroundColor: "#D90B1C",
    },
  };

  return (
    <div>
      <Button style={{ color: "black" }} onClick={() => setOpenState(true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={openState}
        onClose={() => setOpenState(false)}
      >
        <List sx={{ width: "60vw" }}>
          {["Services", "Doctors", "Contact", "Location"].map((element) => {
            return (
              <ListItem
                disablePadding
                key={`${Math.floor(Math.random() * 999)}`}
              >
                <ListItemButton>
                  <ListItemText primary={element} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          <ListItem>
            <Button variant="contained" sx={styles}>
              Make an Appointment
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
