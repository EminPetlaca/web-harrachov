import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <ul>
                    <Link to="/"><li>Obec</li></Link>
                    <Link to="/uredni"><li>Obecní úřad</li></Link>
                    <Link to="/"><li>Samospráva obce</li></Link>
                    <Link to="/"><li>Služby pro občany</li></Link>
                    <Link to="/"><li>klutura a volný čas</li></Link>
                </ul>
                <ul>
                    <li>e-mail: obec@libeznice.cz</li>
                    <li>e-mail: stav.urad@libeznice.cz</li>
                    <li>tel/fax</li>
                    <li>adresa uradu</li>
                </ul>
                <img src="src\assets\img\sponzori.jpg" alt="" />
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20432.336774710944!2d14.471232330158678!3d50.19774405089075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470be95c471428a3%3A0x374897eb862c1eb9!2sL%C3%ADbeznice!5e0!3m2!1sen!2scz!4v1715792159980!5m2!1sen!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </>
    )
}
