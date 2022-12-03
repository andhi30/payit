
import React, { Component, useEffect } from "react";
import Header from "./Header";
import { BrowserQRCodeReader, BrowserCodeReader, BrowserMultiFormatReader } from '@zxing/browser';

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

    async componentDidMount() {
        const codeReader = new BrowserMultiFormatReader();

        const videoInputDevices = await BrowserCodeReader.listVideoInputDevices();

        // choose your media device (webcam, frontal camera, back camera, etc.)
        const selectedDeviceId = videoInputDevices[0].deviceId;

        console.log(`Started decode from camera with id ${selectedDeviceId}`);

        const previewElem = document.querySelector('#test-area-qr-code-webcam > video');

        // you can use the controls to stop() the scan or switchTorch() if available
        const controls = await codeReader.decodeFromVideoDevice(selectedDeviceId, previewElem, (result, error, controls) => {
            // use the result and error values to choose your actions
            // you can also use controls API in this scope like the controls
            // returned from the method.
            if (result)
            console.log(result.getText())
        });

        // stops scanning after 20 seconds
        setTimeout(() => controls.stop(), 20000);
    }

    render() {
        return (
            <>
                <Header title='Pay!t' />
                <div id="test-area-qr-code-webcam" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    
                <video>

                </video>

                </div>
                <p>{this.state.result}</p>
            </>
        );
    }
}
export default Test;
