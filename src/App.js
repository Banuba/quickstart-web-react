import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';
import { Webcam, Player, Effect, Dom } from "./BanubaSDK"

const BANUBA_CLIENT_TOKEN = "PUT YOUR CLIENT TOKEN HERE"

function App() {
  // componentDidMount
  useEffect(() => {
    const webcam = new Webcam()
    
    Player
      .create({
        clientToken: BANUBA_CLIENT_TOKEN,
        /**
         * By default BanubaSDK.js tries to loads BanubaSDK.wasm and BanubaSDK.data files relative to itself.
         * Since the BanubaSDK.js will be bundled to something like `static/js/[name].[hash].js` during a build
         * and the BanubaSDK.wasm and BanubaSDK.data files may not lay next to the bundle file
         * we have to tell the BanubaSDK where it can find these BanubaSDK.wasm and BanubaSDK.data files.
         * @see {@link https://docs.banuba.com/generated/typedoc/globals.html#sdkoptions} further information}
         */
        locateFile: {
          'BanubaSDK.wasm': 'webar/BanubaSDK.wasm',
          'BanubaSDK.data': 'webar/BanubaSDK.data',
        },
      })
      .then((player) => {
        player.use(webcam)
        player.applyEffect(new Effect("webar/Glasses.zip"))
        Dom.render(player, "#webar")
      })

    // componentWillUnmount
    return () => {
      webcam.stop()
      Dom.unmount("#webar")
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="webar" style={{ maxWidth: '600px' }}></div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
