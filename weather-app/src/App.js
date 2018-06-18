import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const API_Key="83e5a4851aea1d686ba473ea675b3c2d";

class App extends React.Component{
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_Key}&units=metric`);
    const data=await api_call.json();
    console.log(data);
  }
  render(){
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
