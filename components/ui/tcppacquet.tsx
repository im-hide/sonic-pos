import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './button';

function TcpPacketSender() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5008', { message });
      setResponse(response.data);
    } catch (error) {
      console.error('Error sending TCP packet:', error);
      setResponse('Error sending TCP packet');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <Button onClick={handleSubmit}>SEND THAT SHIt (bunger 🍔)</Button>
      <p>{response}</p>
    </div>
  );
}

export default TcpPacketSender;