import {SearchBar} from './components/SearchBar';
import { WeatherDisplay } from './components/WeatherDisplay';
import './App.css';


function App(){
    return(
    <div>
      <SearchBar onSearch={() => {}} loading={false} />
      <WeatherDisplay data={null} error={null} />
    </div>
    )  
}

export default App;