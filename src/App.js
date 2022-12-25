import './App.css';

import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx'
import Header from './components/Header';
import SwipeableEdgeDrawer from './ResultDrawer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedText: []
    }

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header title='Pay!t' />
        <section className="App-section">
          <br />
          <br />
          <Html5QrcodePlugin
            fps={30}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={this.onNewScanResult}
            formatsToSupport={[9]}
          />
          {/* <ResultContainerPlugin results={this.state.decodedResults} /> */}
        </section>
        <SwipeableEdgeDrawer results={this.state.decodedText} />
      </div>
    );
  }

  onNewScanResult(decodedText, decodedResult) {
    console.log(
      "App [result]", decodedResult);

    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);
    this.setState((state, props) => {
      if (state.decodedText[state.decodedText.length - 1] !== decodedText) {
        state.decodedText.push(decodedText);
        return state
      }
    });
  }
}

export default App;
