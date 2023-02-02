import React from "react";
import { Button } from "@mui/material";
import { theme } from "~/styles/theme";

type IButtonCalendar = {
  color?: keyof typeof theme.colors;
} & Omit<React.ComponentPropsWithRef<typeof Button>, "color">;

export default function ButtonMui3({
  color = "primary",
  children,
  sx,
  ...props
}: IButtonCalendar) {
  return (
    <Button
      {...props}
      sx={[
        (muiTheme) => {
          return {
            borderRadius: "8px",
            padding: "8px 25px",
            width: "100%",
            color: theme.colors[color].color,
            backgroundColor: theme.colors[color].backgroundColor,
            borderColor: "transparent",
            "&:hover": {
              color: theme.colors[color].color,
              backgroundColor: theme.colors[color].backgroundColor,
              borderColor: "transparent",
              boxShadow: muiTheme.shadows[6],
            },
          };
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Button>
  );
}
