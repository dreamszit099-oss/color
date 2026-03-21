import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '20px', background: '#f1f1f1', textAlign: 'center' }}>
            <div>
                <h4>Legal Information</h4>
                <p>© 2026 Your Company Name. All rights reserved.</p>
            </div>
            <div>
                <h4>Subscribe to Our Newsletter</h4>
                <form>
                    <input type="email" placeholder="Enter your email" required style={{ padding: '10px', marginRight: '10px' }} />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div>
                <h4>Quick Links</h4>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <style jsx>{`
                @keyframes fade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                footer { animation: fade 1s ease-in; }
            `}</style>
        </footer>
    );
};

export default Footer;
