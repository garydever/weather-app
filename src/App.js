import React from 'react';
import Title from './Components/Title';
import Search from './Components/Search';
import Weather from './Components/Weather';
const apiKey = '80916da4aa4b0e50633fa4ee816a4ea0';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined,
    temp_max: undefined,
    temp_min: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const zipcode = e.target.elements.zipcode.value;
    let apiCall
    if (zipcode) {
      apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiKey}&units=imperial`);
    } else{
      apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`);
    }
    const data = await apiCall.json();
    console.log(data);
    if (data.main){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        error: undefined   
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        temp_max: undefined,
        temp_min: undefined,
        error: 'Enter a valid city, country, zipcode'
      })
    }
  }

  render () {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Title />
                </div>
                <div className="col-md-7 form-container">
                <Search getWeather={this.getWeather}/>
                <Weather 
                city={this.state.city}
                country={this.state.country}
                temperature={this.state.temperature}
                description={this.state.description}
                temp_max={this.state.temp_max}
                temp_min={this.state.temp_min}
                error={this.state.error}/>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}


      

export default App;
