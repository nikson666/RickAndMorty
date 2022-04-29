import React from "react";
import { Box, Button, Card, CardMedia, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { pathsOfRoutes } from "../../fileWithConstatns";

const CardPage = (props) => {
  const navigate = useNavigate();

  const style = {
    wrapper: {
      marginTop: "15vh",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    backBtnWrapper: {
      position: "absolute",
      top: "0",
      left: "0",
      background: "#3f51b5",
    },
    arrowBackBtn: {
      color: "white",
    },
    card: {
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
    },
    info: {
      padding: "5px",
      fontWeight: "500",
    },
  };

  const backButtonHandler = () => {
    navigate(pathsOfRoutes.root);
  };

  return props.card ? (
    <Box style={style.wrapper}>
      <Button style={style.backBtnWrapper} onClick={() => backButtonHandler()}>
        <ArrowBackIcon style={style.arrowBackBtn} />
      </Button>
      <Card style={style.card}>
        <CardMedia
          sx={{ width: 100 }}
          alt="img"
          component="img"
          image={props.card.image}
        />
        <Typography gutterBottom variant="h4" component="div">
          {props.card.name}
        </Typography>
        <Typography style={style.info} variant="body1">
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
    </Box>
  ) : null;
};

const mapStateToProps = (state) => ({
  card: state.cardPage.card,
});

export default connect(mapStateToProps, {})(CardPage);
