import React, { useState } from "react";
import { Grid } from "@material-ui/core";

function Selection(props) {
    const [isMouseOver, setMouseOver] = useState(false);
  
    return (
        <Grid item xs={4} xl={2} style={{textAlign: "center", marginTop: "5vh"}}>
            <a href><img
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
                src={props.path}
                alt={props.name}
                style={{width: isMouseOver ? "90%" : "70%", height: isMouseOver ? "90%" : "70%"}}
                onClick={props.handleClickSelection}
            ></img></a>
        </Grid>
    );
}

export default Selection;