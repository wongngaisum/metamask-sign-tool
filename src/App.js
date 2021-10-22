import React, { useState } from 'react';
import Web3 from 'web3';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      signStr: '',
      signedStr: ''
    };
  }

  hexToString = hex => {
    if (!hex.match(/^[0-9a-fA-F]+$/)) {
      throw new Error('is not a hex string.');
    }
    if (hex.length % 2 !== 0) {
      hex = '0' + hex;
    }
    var bytes = [];
    for (var n = 0; n < hex.length; n += 2) {
      var code = parseInt(hex.substr(n, 2), 16)
      bytes.push(code);
    }
    return bytes;
  }

  arrayOfBytesToString = arr => {
    return arr.map(function (x) {return (x.toString(16).length === 1 ? '0' + x.toString(16) : x.toString(16));}).join('');
  }

  async componentDidMount() {
    let web3;
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      console.log(window.ethereum);
      console.log(await web3.eth.net.getId());
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Acccounts now exposed
      } catch (error) {
        console.error(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      web3 = window.web3;
      console.log('Injected web3 detected.');
    }
  
    const accounts = await web3.eth.getAccounts();
    console.log(web3.eth.accounts);

    this.setState(
      {
        web3,
        account: accounts[0],
      }
    );
  }

  sign = () => {
    return this.state.web3.eth.personal.sign(this.state.web3.utils.toHex(this.state.signStr), this.state.account, (err, signature) => {
        this.setState({signedStr: signature});
      });
  }

  updateSignStr = (event) => {
    this.setState({
      signStr: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>Input data to be signed:  Will be prepended by "\x19Ethereum Signed Message:\n ‖ len(message)"</div>
          <input
            value={this.state.signStr}
            onChange={this.updateSignStr}
          />
          <button onClick={this.sign}>GENERATE</button>
        </div>
        <div>
          <div>Signature: {this.state.signedStr}</div>
        </div>
      </div>
    );
  }
}

export default App;
