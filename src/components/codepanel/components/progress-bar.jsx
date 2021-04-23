import React, { useState, useEffect } from "react";
import useStyles from "../../header/styles";
const Progress = ({done}) => {
    const [style, setStyle] = useState({});
    const classes = useStyles();

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div className={classes.progressBtn}>
            <span className={classes.progressText}>TRAININGS</span>

            <div className={classes.progressDone} style={style}>
            </div>
        </div>
    )
}
export default Progress;