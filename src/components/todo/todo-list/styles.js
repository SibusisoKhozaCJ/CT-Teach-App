import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    ToDoRoot: {
        background: props => props.color,
        border: "5px solid rgba(240, 238, 238, 0.5)",
        width: "300px",
        borderRadius: "25px",
        padding: "20px",
        display: 'flex',
        flexDirection: "column",
        textAlign: "left",
      },
      ToDoButtonRoot: {
        width: "172px",
        height: "40px",
        background: "rgba(196, 196, 196, 0.49)",
        borderRadius: "50px",
        border: "none",
        alignSelf: "flex-end",
      },
      ToDoButtonOutlined: {
        fontWeight: "700",
        fontSize: "31px",
        color: "#FFFFFF",
      },
      ToDoTitleText: {
        fontSize: "32px",
        fontWeight: "700",
        color: "#FFFFFF",
      },
      ToDoContentText: {
        fontSize: "24px",
        fontWeight: "400",
        color: "#FFFFFF",
      },
      ToDoGridHeight: {
          width: "fit-content",
          display: "inline-block",
          marginBottom: 10,
      }
})