import './App.css';

import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx'
import Header from './components/Header';
import SwipeableEdgeDrawer from './ResultDrawer';
import { Html5QrcodeResult } from 'html5-qrcode/esm/core';
import QRCode from "react-qr-code";
export interface Item {
  barcode: string,
  jumlah: number,
}
interface IState {
  items: Item[],
  displayQr: boolean,
}
interface IProps {

}
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      items: [],
      displayQr: false,
    };

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
    this.setJumlah = this.setJumlah.bind(this);
    this.buatQrCodeBayar = this.buatQrCodeBayar.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header title='Pay!t' />
        <section className="App-section">
          <br />
          <br />
          {
            this.state.displayQr ?
              <div style={{ height: "auto", margin: "0 auto", maxWidth: 250, width: "100%" }}>
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={JSON.stringify(this.state.items)}
                  viewBox={`0 0 256 256`}
                />
              </div>
              :
              <Html5QrcodePlugin
                fps={30}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={this.onNewScanResult}
                formatsToSupport={[9]}
              />
          }
          {/* <ResultContainerPlugin results={this.state.decodedResults} /> */}
        </section>
        <SwipeableEdgeDrawer results={this.state.items} setJumlah={this.setJumlah} displayQr={this.buatQrCodeBayar}/>
      </div>
    );
  }

  buatQrCodeBayar() {
    this.setState(() => ({
      displayQr: true,
    }))
  }

  setJumlah(index: number, jumlahBaru: number) {
    this.setState((_state, _props) => {
      if (jumlahBaru == 0){
        // Hapus item
        let newItems = _state.items.filter((value:Item, itemIndex:number) => itemIndex !== index)
        return {
          items: newItems
        }
      }
      const nextItem = _state.items.map((c, i) => {
        if (i === index) {
          return {
            barcode: c.barcode,
            jumlah: jumlahBaru,
          }
        }
        else {
          return c;
        }
      })
      return {
        items: nextItem
      }
    })
  }

  onNewScanResult(decodedText: string, decodedResult: Html5QrcodeResult) {
    console.log(
      "App [result]", decodedResult);


    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);
    this.setState((state: any, _props: any) => {
      if (state.items.length === 0) {
        let newItem = {
          barcode: decodedText,
          jumlah: 1,
        }
        return {
          items: [newItem]
        }
      }
      else if (state.items[state.items.length - 1].barcode !== decodedText) {
        let newItem = {
          barcode: decodedText,
          jumlah: 1,
        }
        return {
          items: state.items.concat([newItem])
        }
      } else {
        return state.items
      }
    });
  }
}

export default App;
