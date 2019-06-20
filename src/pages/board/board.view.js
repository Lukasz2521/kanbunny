import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardContainer from './../../components/card/card.container';
import { makeStyles } from '@material-ui/styles';

export class Board extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        this.setState({
            tasks:[
                { id: 1, title: 'test 1', description: 'short description' },
                { id: 2, title: 'test 2', description: 'short description' },
                { id: 3, title: 'test 3', description: 'short description' }
            ]
        })
    }

    onDragOver(e) {
        e.preventDefault();
    }

    onDrop(e) {

    }

    render() {
        return (
            <main>
                <Grid container spacing={5}>
                    <Grid sm={4} item>
                        <Typography color="textSecondary" gutterBottom>
                            To do
                        </Typography>
                        <Box onDragOver={(e) => this.onDragOver(e)}
                            component="div"
                            onDrop={(e) => this.onDrop(e)}>
                            {this.state.tasks.map((task, index) => {
                                return <CardContainer key={index} task={task}></CardContainer>;
                            })}
                        </Box>
                    </Grid>
                    <Grid sm={4} item>
                        <Typography color="textSecondary" gutterBottom>
                            in progress
                        </Typography>
                        <Box onDragOver={(e)=>this.onDragOver(e)}
                            component="div"
                            onDrop={(e) => this.onDrop(e)}>

                        </Box>
                    </Grid>
                    <Grid sm={4} item>
                        <Typography color="textSecondary" gutterBottom>
                            done
                        </Typography>
                        <Box component="div">

                        </Box>
                    </Grid>
                </Grid>
            </main>
        );
    }
}