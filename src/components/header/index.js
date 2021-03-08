import React from 'react'
import Nav from './nav.js'
import Sidebar from './sidebar.js'
import './index.css'

function Header({navbar, sidebar, fullMenuOpen, againClicked, width}) {

    return (
        <header id="header">
            <div className="header-background" id="header-background"></div>
            
            { ( width>604 || fullMenuOpen ) &&
            <>
            <div className="nav-background"></div>
            <Nav
                navbar={navbar}
                againClicked={againClicked}
            />
            </>
            }
            <div className="icon-menu" onClick={()=> againClicked() }>
                <i className="fas fa-bars"></i>
            </div>

            { ( width>604 || ( width<=604 && !fullMenuOpen ) ) &&
            <>
            <div className="header-text">
                <div className="title">
                    <h1>Hi, I am Md. Sayeed Rahman</h1>
                    <p>I have been doing <span id="cp">competitive programming</span> from 2019 November & <span id="web-dev">web development</span> from 2021 January......</p>
                </div>
            </div>
            <Sidebar 
                sidebar={sidebar}
            />
            </>
            }

        </header>
    )
}

export default Header;