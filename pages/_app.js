import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, isOn: false, name: "Living Room" },
  { id: 2, isOn: false, name: "Kitchen" },
  { id: 3, isOn: false, name: "Bedroom" },
  { id: 4, isOn: false, name: "Bathroom" },
  { id: 5, isOn: false, name: "Garage" },
  { id: 6, isOn: false, name: "Porch" },
  { id: 7, isOn: false, name: "Garden" },
  { id: 8, isOn: false, name: "Office" },
];

export default function App({ Component, pageProps }) {
  const [walter, setWalter] = useState(initialLights);

  function handleToggleLight(id) {
    setWalter(
      walter.map((light) => {
        if (light.id === id) return { ...light, isOn: !light.isOn };

        return light;
      })
    );
  }

  function turnAllLights(newState) {
    setWalter(
      walter.map((light) => {
        return { ...light, isOn: newState };
      })
    );
  }

  function turnAllLightsOff() {
    turnAllLights(false);
  }

  function turnAllLightsOn() {
    turnAllLights(true);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        lights={walter}
        toggleLight={handleToggleLight}
        // turnAllLightsOn={turnAllLightsOn}
        // turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={() => turnAllLights(true)}
        turnAllLightsOff={() => turnAllLights(false)}
        {...pageProps}
      />
    </Layout>
  );
}
