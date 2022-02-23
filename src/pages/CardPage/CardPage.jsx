import { Card, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const CardPage = (props) => {
  return props.card ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "rgba(1,1,1, .2)",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // maxWidth: "300px",
          boxShadow:
            "rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
        sx={{ maxWidth: 345 }}
      >
        <CardMedia
          sx={{ width: 100 }}
          alt="img"
          component="img"
          image={props.card.image}
        />
        <Typography gutterBottom variant="h5" component="div">
          {props.card.name}
        </Typography>
        <Typography style={{padding: '5px'}} variant="body1">
          {`status: ${props.card.status}`}
          <br />
          {`species: ${props.card.species}`}
          <br />
          {`gender: ${props.card.gender}`}
          <br />
          {`location: ${props.card.location.name}`}
          <br />
          {`created: ${props.card.created}`}
          <br />
          {`episode: ${props.card.episode.length}`}
        </Typography>
      </Card>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  card: state.cardPage.card,
});

export default connect(mapStateToProps, {})(CardPage);
