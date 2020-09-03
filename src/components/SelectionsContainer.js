import React, { useState, useEffect } from "react";
import Selection from "./Selection";
import { Grid, Button, Typography } from "@material-ui/core";
import Score from "./Score";
const paper = require("../images/paper.png");
const rock = require("../images/rock.png");
const scissors = require("../images/scissors.png");


function SelectionsContainer() {
    const selections = [
        {
            name: "rock",
            path: rock
        },
        {
            name: "scissors",
            path: scissors
        },
        {
            name: "paper",
            path: paper
        }];

        const [selection, setSelection] = useState("");
        const [compSelection, setCompSelection] = useState("");
        const [isSelected, setState] = useState(false);
        const [winner, setWinner] = useState("");
        const [score, setScore] = useState({playerScore: 0, computerScore: 0});

        
        function handleClickSelection(e) {
            const value = e.target.alt;

            if (!isSelected) {
                switch(value) {
                    case 'rock':
                        setSelection(selections[0]);
                        break;
    
                    case 'scissors':
                        setSelection(selections[1]);
                        break;
    
                    case 'paper':
                        setSelection(selections[2]);
                        break;
    
                    default:
                        setSelection("");
                        break;
                }
                setCompSelection(selections[Math.floor(Math.random() * 3)]);
                setState(true);
            }
        }

        useEffect(() => {
            const playerSelection = selection.name;
            const computerSelection = compSelection.name;
            
            if (playerSelection && computerSelection) {
                if (playerSelection === "rock" && computerSelection === "scissors") {
                    setWinner("YOU WON");
                    setScore(prevScore => {
                        return {...prevScore, playerScore: prevScore.playerScore++};
                    });
                } else if (playerSelection === "paper" && computerSelection === "rock") {
                    setWinner("YOU WON");
                    setScore(prevScore => {
                        return {...prevScore, playerScore: prevScore.playerScore++};
                    });
                } else if (playerSelection === "scissors" && computerSelection === "paper") {
                    setWinner("YOU WON");
                    setScore(prevScore => {
                        return {...prevScore, playerScore: prevScore.playerScore++};
                    });
                } else if (playerSelection === computerSelection) {
                    setWinner("DRAW");
                } else {
                    setWinner("COMPUTER WON");
                    setScore(prevScore => {
                        return {...prevScore, computerScore: prevScore.computerScore++};
                    });
                }
            }
        }, [selection, compSelection]);

        function restartGame() {
            setState(false);
            setWinner("");
        }

    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh", maxHeight: "100vh"}}>
            <Grid container justify="center" alignItems="flex-start" style={{height: "35vh"}}>
                {selections.map(item => {
                    return (
                        <Selection 
                            key={item.name}
                            path={item.path}
                            name={item.name}
                            handleClickSelection={handleClickSelection}
                        />
                    );
                })}
            </Grid>
                <Grid container style={{height: "30vh"}}>
                    <Score 
                        playerName="YOU"
                        playerScore={score.playerScore}
                    />
                    <Grid item style={{textAlign: "center", width: "40vw", minWidth: "40vw"}}>
                        {isSelected &&
                        <Button size="large" onClick={isSelected && restartGame}>
                            <Typography variant="h3">
                                RESTART
                            </Typography>
                        </Button>
                        }
                    </Grid>
                    <Score 
                        playerName="COMPUTER"
                        playerScore={score.computerScore}
                    />
                </Grid>
            <Grid container justify="center" alignItems="center" style={{height: "35vh", flex: "1"}}>
                {isSelected &&
                <Grid item xs={4} xl={3} style={{textAlign: "center", display: "block"}}>
                    <img src={selection.path} alt={selection.name}></img>
                </Grid>
                }
                {isSelected &&
                <Grid item xs={4} xl={3} style={{textAlign: "center", display: "block"}}>
                    <img src={compSelection.path} alt={compSelection.name}></img>
                </Grid>
                }
            </Grid>
            {isSelected &&
            <Grid item style={{textAlign: "center", flex: "1"}}>
                <Typography variant="h3">
                    {winner}
                </Typography>
            </Grid>
            }
        </div>
    );
}

export default SelectionsContainer;