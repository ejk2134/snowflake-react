import React from 'react';
import { connect } from 'react-redux';
import selectOccasions from '../selectors/occasions';

export const OccasionList = (props) => (
    <div>
        {props.occasions.map((occasion) => (
            <div key={occasion}>
                <p>{occasion}</p>
            </div>
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    occasions: selectOccasions(state.occasions)
});

export default connect(mapStateToProps)(OccasionList);