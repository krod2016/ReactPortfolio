import React, { useState } from 'react';
import Nav from './components/nav';
import About from './components/about';
import ContactForm from './components/contact';
import Footer from './components/footer'
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'My Portfolio',
      description: 'A selection of my work',
    },
    { name: 'Resume', description: 'My previous education, and work experience' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>

            <About currentCategory={currentCategory}></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}

      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;