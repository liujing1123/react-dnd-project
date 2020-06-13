/* eslint-disable */
import React, { Component } from 'react';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>
        <DndProvider backend={Backend}>
          <Container></Container>
        </DndProvider>
      </div>
    );
  }
}

export default App;
