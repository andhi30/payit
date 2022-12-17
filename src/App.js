import './App.css';

import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx'
import ResultContainerPlugin from './ResultContainerPlugin.jsx'
import HowToUse from './HowToUse.jsx'
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedResults: []
    }

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header title='Pay!t'/>
        <section className="App-section">
          <br />
          <br />
          <br />
          <Html5QrcodePlugin 
            fps={10}
            qrbox={200}
            disableFlip={false}
            qrCodeSuccessCallback={this.onNewScanResult}/>
          {/* <ResultContainerPlugin results={this.state.decodedResults} /> */}
        </section>
      </div>
    );
  }

  onNewScanResult(decodedText, decodedResult) {
    console.log(
      "App [result]", decodedResult);

    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);
    this.setState((state, props) => {
      state.decodedResults.push(decodedResult);
      return state;
    });
  }
}

export default App;
