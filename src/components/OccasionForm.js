import React from 'react';

export default class OccasionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.occasion ? props.occasion : '',
            error: ''
        };
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.description) {
            this.setState({ error: '' });
            this.props.onSubmit({
                occasion: this.state.description
            });
        } else {
            this.setState({ error: 'Must enter a description' });
        };
    };
    render() {
        return (
            <div>
                {this.state.error ? <p>{this.state.error}</p> : null}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="What's the occasion?"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}