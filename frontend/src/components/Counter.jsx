import React from 'react';
import "../styles.css"

class Counter extends React.Component {
    render() {

        return (
            <div id={"counterDiv"} className={"container"}>
                <h2>{this.props.person}</h2>
                <div className={"leftAlign80"}>
                    <h4 >
                        {this.props.count}
                    </h4>
                </div>
                <div style={buttonDiv}>
                    <button style={rightButton}>+</button>
                    <button style={{...rightButton, ...downRight}}
                            onClick={() => {
                                this.props.onClick();
                            }}>
                        -
                    </button>
                </div>
            </div>
        );
    }
}

const rightButton = {
    width: "70px",
    position: "absolute",
    height: "47%",
    right: "0px",
    zIndex: "1",
};

const buttonDiv = {
    display: "inline-block",
    paddingRight: "7px",
    position: "relative",
    width: "100%",
};

const downRight = {
    bottom: "0%",
};

export default Counter;
