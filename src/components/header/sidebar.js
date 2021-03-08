import React from 'react'

function Sidebar({sidebar}) {

    return <div className="sidebar">
    {
        sidebar.map(item => <div className="social-icons"><a href={item.link} target="_blank"><i class={item.classNames}></i></a></div>)
    }        
    </div>
}

export default Sidebar;