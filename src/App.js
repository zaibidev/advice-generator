import React  from 'react';
import axios from "axios";
import  "./advice.css";

class app extends React.Component{

  constructor() {
    super();
    this.state = {
      advice : ""
    }
  }

  componentDidMount(){
    axios.get("https://api.adviceslip.com/advice")
    .then((data) =>{ console.log(data.data.slip.advice);
      this.setState({advice : data.data.slip.advice })
    })
    .catch(err => console.log(err.data))
    
  }

  adviceGenerator = () => {
    axios.get("https://api.adviceslip.com/advice")
    .then((data) =>{ console.log(data.data.slip.advice);
      this.setState({advice : data.data.slip.advice })
    })
    .catch(err => console.log(err.data))
    
  }


  render() {
  return(
    <div className="box1">
    <header className="box">
      <h2 style={{"margin-top":"20px"}} >Advice Generator</h2>

    </header>
    <div className="shelby">
      <div className="box2">
    <h1>{this.state.advice}</h1>
    </div>
  <button onClick = { this.adviceGenerator } > Click me to get advice</button>
  </div>
  </div>
  );
  }
}

export default app;
