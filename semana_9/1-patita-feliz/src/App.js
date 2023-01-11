
import './App.css';
import Footer from './components/secions/Footer';
import Header from './components/secions/Header';
import Appointments from './pages/Appointments';

function App() {

    const company = {
    name: '🐾Patita Feliz🐾',
    slogan : '🏆La mejor veterinaria del Pais🏆'
    };

    const credits = {
        year: new Date().getFullYear(),
        author: 'Wilson Cutipa'
    };
    

return(
    <>
         <Header company = {company} />
         <main>
            <Appointments/>
         </main>
         <Footer credits = {credits} />
             
    </>

);

}

export default App;
