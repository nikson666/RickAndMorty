import { Card, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export const User = (props) => {
  return (
    <NavLink
      style={{
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
        borderRadius: "20px",
        overflow: "hidden",
        margin: "10px 10px 25px",
        outline: "none",
        textDecoration: "none",
        maxWidth: "300px",
      }}
      onClick={() => props.getCard(props.user.id)}
      to={"/card"}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "none",
        }}
        sx={{ maxWidth: 345 }}
      >
        <CardMedia
          loading="lazy"
          sx={{ width: 100 }}
          alt="img"
          component="img"
          image={props.user.image}
        />
        <Typography gutterBottom variant="h5" component="div">
          {props.user.name}
        </Typography>
        <Typography
          style={{
            background: `${
              props.user.status === "Dead"
                ? "red"
                : props.user.status === "unknown"
                ? "purple"
                : "green"
            }`,
            padding: "5px 10px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
          variant="body1"
        >
          {props.user.status}
        </Typography>
      </Card>
    </NavLink>
  );
};
