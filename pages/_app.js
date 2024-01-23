import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

/* hier Array:      <Light name="Living Room" />
      </li>
      <li>
        <Light name="Kitchen" />
      </li>
      <li>
        <Light name="Bedroom" />
      </li>
      <li>
        <Light name="Bathroom" />
      </li>
      <li>
        <Light name="Garage" />
      </li>
      <li>
        <Light name="Porch" />
      </li>
      <li>
        <Light name="Garden" />
      </li>
      <li>
        <Light name="Office" />
      </li>*/
