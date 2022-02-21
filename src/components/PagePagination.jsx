import { ButtonGroup, Button} from "@material-ui/core";
import React from "react";

export const PagePagination = (props) => {
  return (
    <ButtonGroup>
      <Button
        onClick={() =>
          props.info.prev ? props.getUsersByPage(props.info.prev) : null
        }
      >
        prev
      </Button>
      <Button
        onClick={() =>
          props.info.next ? props.getUsersByPage(props.info.next) : null
        }
      >
        next
      </Button>
    </ButtonGroup>
  );
};
