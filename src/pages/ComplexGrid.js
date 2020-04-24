import React from "react";
import LiveCodeEditor from "../components/LiveCodeEditor";

const ComplexGrid = () => {
  return (
    <LiveCodeEditor
      code={`() => {
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        display: 'grid',
        gridTemplateColumns: '2fr 3fr 1fr',
        gridTemplateRows: 'repeat(4, 1fr)'
    },
    image: {
        width: 128,
        height: 128,
        gridRow: 'span 4'
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    subtitle: {
        gridRow: 'span 4',
        justifySelf: 'end'
    }
}));
const classes = useStyles();

return (
<Paper className={classes.paper}>
    <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="/complex.jpg" />
    </ButtonBase>
    <Typography gutterBottom variant="subtitle1">
        Standard license
    </Typography>
    <Typography variant="subtitle1" className={classes.subtitle}>$19.00</Typography>
    <Typography variant="body2" gutterBottom>
        Full resolution 1920x1080 • JPEG
    </Typography>
    <Typography variant="body2" color="textSecondary">
        ID: 1030114
    </Typography>
    <Typography variant="body2" style={{ cursor: 'pointer', alignSelf: 'end' }}>
        Remove
    </Typography>
</Paper>);
}
  `}
    />
  );
};

export default ComplexGrid;
