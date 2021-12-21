import logo from './logo.svg';
import './App.css';

import ReactPlayer from "react-player"
import { useState, useEffect } from "react"
import { BANUBA_CLIENT_TOKEN } from "./BanubaClientToken"
import { Webcam, Player, Effect, MediaStreamCapture } from "./BanubaSDK"

function App() {
  const [stream, setStream] = useState()

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
          "BanubaSDK.wasm": "webar/BanubaSDK.wasm",
          "BanubaSDK.data": "webar/BanubaSDK.data",
        },
      })
      .then((player) => {
        player.use(webcam)
        player.play()
        player.applyEffect(new Effect("webar/Glasses.zip"))

        const capture = new MediaStreamCapture(player)

        setStream(capture)
      })

    // componentWillUnmount
    return () => {
      webcam.stop()
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="webar" style={{ maxWidth: '600px' }}>
          <ReactPlayer url={stream} playing/>
        </div>
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
