import React from 'react';
import {Provider} from 'react-redux'
import Header from './common/header'
import store from "./store";
import {BackTop, Layout} from 'antd';
import {BrowserRouter , Route} from 'react-router-dom'
import Footer from "./common/footer";
import Share from "./pages/share";
import Detail from "./pages/detail/loadable";
import './App.css';
import Result from "./pages/result";
import Album from "./pages/album";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Layout>
                  <Header />

                  <Route path={'/'} exact component={Share}/>
                  <Route path={'/detail/:id'} exact component={Detail}/>
                  <Route path={'/result/:type/:id'} exact component={Result}/>
                  <Route path={'/album'} exact component={Album}/>

                  <BackTop style={{
                      height: 40,
                      width: 40,
                      lineHeight: '40px',
                      borderRadius: 4,
                      backgroundColor: '#1088e9',
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 14,
                  }}>
                      Up
                  </BackTop>

                  <Footer />
              </Layout>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
