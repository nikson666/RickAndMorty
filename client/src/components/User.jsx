import { Card, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { pathsOfRoutes } from "../fileWithConstatns";

export const User = (props) => {
  const statusColors = {
    dead: "red",
    unknown: "purple",
    alive: "green",
  };

  const handleLinkToCard = () => {
    props.getCard(props.user.id);
  };

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
      onClick={() => handleLinkToCard()}
      to={pathsOfRoutes.card}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "none",
          height: "100%",
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
                ? statusColors.dead
                : props.user.status === "unknown"
                ? statusColors.unknown
                : statusColors.alive
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
