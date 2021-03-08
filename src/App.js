import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/header/index.js'
import Skills from './components/skills/index.js'
import Certificates from './components/certificates/index.js'
import Works from './components/works/index.js'
import About from './components/about/index.js'
import Contact from './components/contact/index.js'
import { SKILLS, CERTIFICATES, WORKS, ABOUT, NAVBAR, SIDEBAR, CODINGPROFILES } from './data/index.js'

function App() {

    const skills = SKILLS;
    const certificates = CERTIFICATES;
    const works = WORKS;
    const about = ABOUT;
    const navbar = NAVBAR;
    const sidebar = SIDEBAR;
    const codingProfiles = CODINGPROFILES;
    const[fullMenuOpen, setFullMenuOpen] = useState(false);
    const[width, setWidth] = useState( window.innerWidth );

    useEffect( ()=> {
        function handleResize() {
            setWidth( window.innerWidth );
        }
        
        window.addEventListener('resize', handleResize);
    })

    function againClicked() {
        setFullMenuOpen(!fullMenuOpen);
    }

  return (
    <div className="App">
        
        <Header
            navbar={navbar}
            sidebar={sidebar}
            fullMenuOpen={fullMenuOpen}
            setFullMenuOpen={setFullMenuOpen}
            againClicked={againClicked}
            width={width}
        />
        
        { (width>604 || !fullMenuOpen) &&
        <>
        <Skills
            skills={skills}
        />
        
        <Works
            works={works}
        />
        
        <Certificates
            certificates={certificates}
        />
        
        <About
            about={about}
        />

        <Contact
            codingProfiles={codingProfiles}
        />
        
        <div className="copyright">
            &copy; Md. Sayeed Rahman
        </div>
        </>
        }
    </div>
  );
}

export default App;
