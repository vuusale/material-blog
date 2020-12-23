import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "60%",
      textAlign: "center"
    },
    textarea: {
        width: "100%",
        height: "60%",
        rows: "4"
    },
    button: {
        marginTop: "20px",
        width: "20%",
        fontSize: "1.5vh"
    }
}));

export default function CreateArticle(props) {
    const classes = useStyles();
    const [text, setText] = useState("");

    return (
        <div className={classes.root}>
            <TextField
                className={classes.textarea}
                id="textarea" 
                label="Start composing article"
                multiline
                rows={20}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />
            <Button
                color="primary" 
                variant="contained"
                className={classes.button}
                onClick={() => {
                    console.log(text);
                }}  
            >Submit</Button>
        </div>
    );
}