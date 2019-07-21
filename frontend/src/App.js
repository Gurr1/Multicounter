import React from "react";
import Counter from "./components/Counter";
import {getAllCounters} from "./api/Counter";
import "./styles.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.counters = [{}];
    }

    componentWillMount() {
        this.counters = getAllCounters();
    }

    render() {
        return (
            <div>
                <div id={"header"}>
                    <h1 id={"header-text"}>
                        Multicounter
                    </h1>
                </div>
                <div className={"backgroundDiv"}>
                    <div style={width}>
                        {
                            App.renderCounters(this.counters)
                        }
                    </div>
                </div>
            </div>
        )
    }

    static renderCounters(personList) {
        return personList.map((counter) => (
            <div style={divStyle}>
                <Counter person={counter.name} count={counter.count}/>
            </div>
        ))
    }
}

const width = {
    align: "center",
    margin: "auto",
};

const divStyle = {
    marginBottom: "5px",
    marginTop: "5px",
};