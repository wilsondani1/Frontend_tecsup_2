
import './App.css';
import Header from './components/secions/Header';

function App() {

    const company = {
    name: 'Patita Feliz',
    slogan : 'La mejor veterinaria del Pais'
    };

return(
    <div>
         <Header company = {company} />
       
    </div>

);

}

export default App;
