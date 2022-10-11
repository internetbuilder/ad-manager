import React from "react";
import './Footer.css';
import { faRocket, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer() {
    return (
        <div class='footer-container'>
            <section>
                <p>Thanks for using AdMan!</p>
            </section>
            <div className="container">
          <div className="contact-information">
            <div className="email-contact">
              <a id="email" href="mailto:bazilkhn@gmail.com" title="Email me">
                bazilkhn@gmail.com
              </a>
            </div>
            <section className="social-links">
              <li className="social-link">
                <a href="https://github.com/youthbazzy" title="@youthbazzy on GitHub">
                  <FontAwesomeIcon icon={faRocket}/>
                </a>
              </li>
              <li className="social-link">
                <a href="https://www.linkedin.com/in/bazil-k-9592a7b6/" title="Bazil Khan on LinkedIn">
                <FontAwesomeIcon icon={faCoffee}/>
                </a>
              </li>
            </section>
          </div>
          <div className="copyright-info">
              <p>Copyright © Bazil Khan</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;