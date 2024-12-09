// Handle serial port errors
port.on('error', (err) => {
    console.error('Serial Port Error:', err);
});

// Parse incoming data from pH sensor
parser.on('data', (data) => {
    try {
        // Assuming pH sensor sends numeric value as string
        const phValue = parseFloat(data);
        
        if (!isNaN(phValue)) {
            const phData = {
                ph: phValue,
                timestamp: new Date().toISOString()
            };
            
            // Emit data to all connected clients
            io.emit('phData', phData);
            
            // Log data
            console.log('pH Reading:', phData);
        }
    } catch (error) {
        console.error('Error parsing pH data:', error);
    }
});

// Simulate pH readings for testing (comment out when using real sensor)
function simulatePhReadings() {
    setInterval(() => {
        // Generate random pH between 6.0 and 8.0
        const randomPh = 6.0 + Math.random() * 2.0;
        
        const phData = {
            ph: randomPh,
            timestamp: new Date().toISOString()
        };
        
        io.emit('phData', phData);
    }, 2000); // Send reading every 2 seconds
}

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('Client connected');
    
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
    // Start simulation (remove when using real sensor)
    simulatePhReadings();
});