import React from 'react';
import { connect } from 'react-redux';
import OccasionForm from './OccasionForm';
import { addOccasion } from '../actions/occasions';

class AddOccasionPage extends React.Component {
    onSubmit = ({ occasion }) => {
        this.props.addOccasion(occasion);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <OccasionForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    addOccasion: (occasion) => dispatch(addOccasion(occasion))
});

export default connect(undefined, mapDispatchToProps)(AddOccasionPage);