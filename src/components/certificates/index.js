import React from 'react'
import './index.css'

function Certificates({certificates}) {
    return (
        <div className="certificates" id="certificates">
            <div>
                <h1 className="section-title">Certificates</h1>
            </div>
            
            <div className="certificates-center">
            {
                certificates.map(certificate => 
                    <div className="certificate">
                        <img src={certificate} alt="certificate-image" />
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Certificates;