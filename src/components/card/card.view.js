import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    card: {
        marginBottom: 15
    }
});

const CardView = (props) => {
    const styles = useStyles();
    return <Card draggable onDragStart={props.onDragStart} className={styles.card}>
        <CardContent>
            <Typography variant="h5" component="h2">
                {props.card.title}
            </Typography>
            <Typography variant="body2" component="p">
                {props.card.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>;
};

export default CardView;