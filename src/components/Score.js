import React from "react";
import { Grid, Typography } from "@material-ui/core";

function Score(props) {
    return (
        <Grid container item justify="center" direction="column" alignItems="center" style={{width: "30vw"}}>
            <Grid item>
                <Typography variant="h4">
                    {props.playerName}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h3">
                    {props.playerScore}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Score;