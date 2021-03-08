import React from 'react'

function Nav({navbar, againClicked}) {
    return (
    <nav>
        <div className="container align-center">
            
            <h3 className="logo">Portfolio</h3>
            
            <ul className="navigation" id="navigation">
                { navbar.map(item => <li><a href={item.route} className="section-link" onClick={() => againClicked() } >{item.id}</a></li>) }
            </ul>

        </div>
    </nav>
    )
}

export default Nav;