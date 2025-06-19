// App.js

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/Router";
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout>
      <AppRouter />
      </Layout>
    </>
  )
}

export default App;
