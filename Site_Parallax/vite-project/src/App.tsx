import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import './App.css'

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
   return (
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
         <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
         <p>Scroll down</p>
         </ParallaxLayer>
         <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: "#ff6d6d" }} />

         <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               color: "white",
            }}>
            <p>Scroll up</p>
         </ParallaxLayer>
      </Parallax>
   );
}