import React, {
  Component
} from 'react';

import Login from './src/componenti/login/login';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }
    render() {
    
      return ( <Login></Login>);

    }


}