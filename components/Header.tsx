import React, { Component } from 'react'
import { Header } from 'react-native-elements';

export default class HomeScreen extends Component {

    render(){
     return(
        <Header
        placement="left"
        centerComponent={{ text: 'PHA', style: { color: '#fff' } }}
      />
     )
    }
  }
 
 