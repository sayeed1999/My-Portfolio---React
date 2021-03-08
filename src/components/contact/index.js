import React from 'react'
import './index.css'

function CodingProfiles({codingProfiles}) {

    return <div className="coding-profiles">
        <p>
            In case, you want to visit my competitive programming profiles, I put those links here:
        </p>
        <ul>
            {codingProfiles.map(codingProfile => 
                <li id="profile-link">
                    <a href={codingProfile.link} target="_blank"><img src={codingProfile.image} alt="coding-profile-link" /></a>
                </li>
            )}
        </ul>
    </div>
}

function Address() {
    
    return <div className="address">
        <h2>Address</h2>
        <div>
            <i className="fa fa-home"></i>
            <p>Dhap, Khaliphapara, Rangpur <br/>
            House: 48, Road: 1 <br/>
            Rangpur, Dhaka, Bangladesh</p>
        </div>
    </div>
}

function EducationHistory() {
    
    return <div className="education-history">
        <p>
            In case, you want to know about my student life, I put the list here:
        </p>
        <ul>
            <li>
                <span>Rajshahi University of Engineering and Technology</span>
                Currently doing B.Sc here..
            </li>
            <li>
                <span>Notre Dame College, Dhaka</span>
                Sat for HSC in 2017.
            </li>
            <li>
                <span>The Millennium Stars, School &amp; College, Rangpur Cantonment</span>
                Sat for SSC in 2015.
            </li>
        </ul>
    </div>
}

function Contact({codingProfiles}) {
    
    return <div className="contact" id="contact">

        <div>
            <h1 className="section-title">Contact</h1>
        </div>

        <div className="contact-center">    
            <CodingProfiles codingProfiles={codingProfiles} />
            <div className="vertical-line"></div>
            <EducationHistory />
            <div className="vertical-line"></div>
            <Address />
        </div>

    </div>
}

export default Contact;