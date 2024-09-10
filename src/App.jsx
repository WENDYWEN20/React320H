import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Article1 from './components/Article1.jsx' 
import Article2 from'./components/Article2.jsx' 

function App() {
  return (
    <> 
    <Header />
    <main>
    <Article1/>
    <Article2/>
    <Nav />
    </main>
    </>
  );
}



export default App
