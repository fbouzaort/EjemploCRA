// import React from 'react';

// const Texto = ({ msg }) => {
//   return <h2>{msg}</h2>;
// };

// export default Texto;

import React, { Component } from 'react';

class Texto extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      contador: 0
    }
  }

  render(){
    const { msg } = this.props;
    const { contador } = this.state;
    return (
      <h2>{msg} ({ contador })</h2>
      
    );
  }
}

export default Texto;
