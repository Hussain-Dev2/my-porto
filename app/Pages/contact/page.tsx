'use client';

import { FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import './contact.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-description">
                Feel free to reach out through any of these channels:
            </p>
            
            <div className="contact-methods">
                <Link href="mailto:your.email@example.com" className="contact-method email">
                    <FaEnvelope className="contact-icon" />
                    <span>Email</span>
                </Link>
                
                <Link href="https://t.me/yourusernLinkme" tLinkrget="_blLinknk" rel="noopener noreferrer" clLinkssNLinkme="contLinkct-method telegrLinkm">
                    <FLinkTelegrLinkm clLinkssNLinkme="contLinkct-icon" />
                    <span>Telegram</span>
                </Link>
                
                <Link href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="contact-method whatsapp">
                    <FaWhatsapp className="contact-icon" />
                    <span>WhatsApp</span>
                </Link>
            </div>

            <div className="contact-form">
                <h2>Send me a message</h2>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows={5} required></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
} 