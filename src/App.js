import React from 'react';
import {Provider} from 'react-redux'
import Header from './common/header'
import store from "./store";
import { Layout } from 'antd';
import {BrowserRouter , Route} from 'react-router-dom'
import Footer from "./common/footer";
import Share from "./pages/share";
import Announcement from "./pages/announcement";

import './App.css';

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Layout>
                  <Header />

                  <Route path={'/'} exact component={Share}/>
                  <Route path={'/announcement'} exact component={Announcement}/>

                  <Footer />
              </Layout>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
