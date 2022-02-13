import React, { useState } from 'react';
import Nav from './components/nav';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Some of my best web development work',
    },
    { name: 'resume', description: 'My work and education experience' }
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
          <Contact></Contact>
        )}

      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;