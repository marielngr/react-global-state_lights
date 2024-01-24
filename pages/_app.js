import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

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
  const [lights, setLights] = useState(initialLights);
  function toggleLight(id) {
    console.log("onToggle", id);
    const newLights = lights.map((light) => {
      if (light.id === id) {
        return { ...light, isOn: !light.isOn };
      }
      return light;
    });
    setLights(newLights);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component lights={lights} toggleLight={toggleLight} {...pageProps} />
    </Layout>
  );
}
