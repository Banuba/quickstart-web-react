import logo from './logo.svg';
import './App.css';

import { useEffect, useRef } from "react"
import { BANUBA_CLIENT_TOKEN } from "./BanubaClientToken"
import { Webcam, Player, Module, Effect, Dom } from "@banuba/webar"

import wasm from "@banuba/webar/BanubaSDK.wasm"
import simd from "@banuba/webar/BanubaSDK.simd.wasm"
import data from "@banuba/webar/BanubaSDK.data"

import FaceTracker from "@banuba/webar/face_tracker.zip"

function App() {
  const ref = useRef({})

  // componentDidMount
  useEffect(() => {
    let webcam = ref.current.webcam
    if (!webcam) webcam = ref.current.webcam = new Webcam()
    
    if (!ref.current.player)
      ref.current.player = Player
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
            "BanubaSDK.wasm": wasm,
            "BanubaSDK.simd.wasm": simd,
            "BanubaSDK.data": data,
          },
        })
        .then((player) => {
          player.addModule(new Module(FaceTracker))
            .then(() => {
              player.use(webcam)
              player.applyEffect(new Effect("effects/glasses_Banuba.zip"))
              Dom.render(player, "#webar")
            })
        })

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
