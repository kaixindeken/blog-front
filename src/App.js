import React from 'react';
import {Provider} from 'react-redux'
import Header from './common/header'
import store from "./store";
import { Layout } from 'antd';
import Footer from "./common/footer";

import './App.css';

function App() {
  return (
      <Provider store={store}>
          <Layout>
              <Header />
              <Footer />
          </Layout>
      </Provider>
  );
}

export default App;
