import React from 'react'
import App from 'next/app'
import Store from 'store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Layout from 'components/layout';

class MyApp extends App {  
  render() {
    const { Component, pageProps } = this.props
    return <Store><Layout name="Home"><Component {...pageProps} /></Layout></Store>
  }
}

export default MyApp