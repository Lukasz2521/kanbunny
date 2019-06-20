import React from 'react';
import CardView from './card.view';

class CardContainer extends React.Component {
    state = {
        id: 0,
        title: 'test title',
        description: 'test description'
    }

    constructor(props) {
        super(props);
    }

    onDragStartHandler = (e) => {
        console.log('drag start');
        //e.dataTransfer.setData();
    }

    render() {
        return (
            <CardView card={this.state}
                onDragStart={this.onDragStartHandler}>
            </CardView>
        );
    }
}

export default CardContainer;