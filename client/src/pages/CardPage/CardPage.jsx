import { Button, Card, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const CardPage = (props) => {
  const navigate = useNavigate();

  return props.card ? (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          background: "#3f51b5"
        }}
        onClick={() => navigate("/")}
      >
        <ArrowBackIcon style={{color: "white"}} />
      </Button>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow:
            "rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px",
          borderRadius: "20px",
          overflow: "hidden",
          maxWidth: "600px",
          width: "80vw",
          margin: "10vh 0",
        }}
      >
        <CardMedia
          sx={{ width: 100 }}
          alt="img"
          component="img"
          image={props.card.image}
        />
        <Typography gutterBottom variant="h4" component="div">
          {props.card.name}
        </Typography>
        <Typography
          style={{ padding: "5px", fontWeight: "500" }}
          variant="body1"
        >
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
