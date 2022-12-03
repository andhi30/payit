
import React, { Component } from "react";
import QrReader from "modern-react-qr-reader";
import Header from "./Header";

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: "No result",
            resultList: []
        };

        this.handleError = this.handleError.bind(this);
        this.handleScan = this.handleScan.bind(this);
    }

    handleScan = (data) => {
        if (data) {
            if (!this.state.resultList.includes(data)) {
                this.setState(prevState => ({
                    result: data,
                    resultList: [...prevState.resultList, data]
                }));
                console.log(this.state.result);
                console.log(this.state.resultList);
            }
            // this.setState({result: data});
        }
    };

    handleError = (err) => {
        console.error(err);
    };

    render() {
        return (
            <>
                <Header title='Pay!t' />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <QrReader
                        delay={300}
                        facingMode={"environment"}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: "80%" }}
                    />


                </div>
                <p>{this.state.result}</p>
            </>
        );
    }
}
export default Test;
