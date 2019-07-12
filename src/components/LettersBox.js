import React, { Component } from 'react';

class LettersBox extends Component {
    render() {
        const { letter, unused, onClick } = this.props    
        if (unused) {
            return (
                <div className="letterbox column is-1" onClick={() => onClick(this.props.letter)}>
                    <p>{letter}</p>
                </div>
            );
        }
        else {
            return (
                <div className="letterbox column is-1 letterIsUsed">
                    <p>{letter}</p>
                </div>
            );
        }

    }
}

export default LettersBox;