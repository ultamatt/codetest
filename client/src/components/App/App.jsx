import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import AppStyles from './AppStyles.css';

const App = (props => {
  return (
      <div className={ AppStyles.container }>
          <div className={ AppStyles.title }>
              <h1>DivaDeck</h1>
          </div>
      </div>
  );
});

export default App;
