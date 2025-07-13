import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import AlertBox from './Alertbox'; // import here

function Contact() {
    const form = useRef();
    const [alert, setAlert] = useState(null); // manage alert state

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_g4yd8yb',
            'template_ivcoxbv',
            form.current,
            'eJq2GvldxpDaqntuU'
        ).then(
            (result) => {
                console.log('Success:', result.text);
                setAlert({ message: 'Message sent successfully!', type: 'success' });
            },
            (error) => {
                console.log('Failed:', error.text);
                setAlert({ message: 'Failed to send message.', type: 'error' });
            }
        );

        e.target.reset();

        // auto-dismiss after 3 seconds
        setTimeout(() => setAlert(null), 3000);
    };

    return (
        <section id="contact" className="contact-section">
            {alert && <AlertBox message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

            <h2 className="section-title">Contact Me</h2>
            <div className="contact-container">
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Your Name" required />
                        <input type="email" name="user_email" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required />
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>Have a question, idea, or opportunity? Feel free to reach out!</p>
                    <div className="contact-icons">
                        <a href="mailto:pranavddabade@gmail.com" target="_blank" rel="noreferrer">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://linkedin.com/in/pranav-dabade-016179284" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="http://github.com/pranavddabade" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
