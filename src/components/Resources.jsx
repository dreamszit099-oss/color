import React, { useState } from 'react';

const Resources = () => {
    const [email, setEmail] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement email capture logic here
        alert(`Thank you for signing up! A guide will be sent to ${email}`);
    };

    return (
        <div>
            <h1>Download Our Free Guide</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email"
                    required 
                />
                <button type="submit">Get My Guide</button>
            </form>
        </div>
    );
};

export default Resources;