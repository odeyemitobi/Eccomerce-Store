import React from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const CustomModal = ({ children, open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      sx={{
        background: "rgba(0, 0, 0, 0.7)",
        "& .MuiPaper-root": {
          background: "#000",
        },
      }}
      onClose={handleClose}
      PaperProps={{
        style: {
          background: "#17181A",
          borderRadius: fullScreen ? "10px 10px 0 0" : "15px",
          position: fullScreen ? "absolute" : "static",
          bottom: fullScreen ? "-30px" : "auto",
          left: fullScreen ? "-30px" : "unset",

          width: "100%",
        },
      }}
      fullWidth
      maxWidth={fullScreen ? "xl" : "sm"}
    >
      {children}
    </Dialog>
  );
};

export const SmallModal = ({ children, open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      sx={{
        background: "rgba(0, 0, 0, 0.7)",
        "& .MuiPaper-root": {
          background: "#000",
        },
      }}
      onClose={handleClose}
      PaperProps={{
        style: {
          background: "#17181A",
          borderRadius: fullScreen ? "10px 10px 0 0" : "15px",
          position: fullScreen ? "absolute" : "static",
          bottom: fullScreen ? "-30px" : "auto",
          left: fullScreen ? "-30px" : "unset",
          width: fullScreen ? "100%" : "20%",
          maxWidth: fullScreen ? "100%" : "20%",
        },
      }}
      fullWidth
      maxWidth={fullScreen ? "xl" : "sm"}
    >
      {children}
    </Dialog>
  );
};
