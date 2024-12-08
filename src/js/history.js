    // Placeholder for pH diagram generation
    const phCanvas = document.getElementById('phDiagram');
    const phCtx = phCanvas.getContext('2d');
    phCanvas.width = phCanvas.parentElement.offsetWidth;
    phCanvas.height = 200;

    // Draw a basic pH diagram for demonstration
    phCtx.fillStyle = "#1e90ff";
    phCtx.fillRect(10, 150, 50, -100); // Bar 1
    phCtx.fillRect(70, 150, 50, -120); // Bar 2
    phCtx.fillRect(130, 150, 50, -80); // Bar 3
    phCtx.fillRect(190, 150, 50, -60); // Bar 4
    phCtx.fillRect(250, 150, 50, -90); // Bar 5

    // Placeholder for water level diagram
    const waterLevelCanvas = document.getElementById('waterLevelDiagram');
    const waterLevelCtx = waterLevelCanvas.getContext('2d');
    waterLevelCanvas.width = waterLevelCanvas.parentElement.offsetWidth;
    waterLevelCanvas.height = 200;

    // Function to draw a straight line representing water level
    function drawWaterLevel(level) {
      waterLevelCtx.clearRect(0, 0, waterLevelCanvas.width, waterLevelCanvas.height); // Clear previous drawing

      waterLevelCtx.beginPath();
      waterLevelCtx.moveTo(0, waterLevelCanvas.height - level); // Starting point at the bottom left
      waterLevelCtx.lineTo(waterLevelCanvas.width, waterLevelCanvas.height - level); // Ending point at the bottom right
      waterLevelCtx.lineWidth = 5;
      waterLevelCtx.strokeStyle = "#1e90ff"; // Water color (blue)
      waterLevelCtx.stroke();
    }

    // Example water level value, change this to simulate different water levels
    let waterLevel = 50; // 50% of the height
    drawWaterLevel(waterLevel);

    // Simulate water level change over time (optional)
    setInterval(() => {
      waterLevel = Math.random() * 150 + 50; // Randomize water level for demonstration
      drawWaterLevel(waterLevel);
    }, 2000); // Update every 2 seconds

    // Function to update real-time pH value and date
    function updateRealTimeData() {
      const date = new Date();
      const formattedDate = date.toLocaleString();
      document.getElementById('realTimeDate').textContent = `Date: ${formattedDate}`;

      // Simulate pH value (for demonstration, replace with real sensor data)
      const phValue = (Math.random() * (8 - 6) + 6).toFixed(2);
      document.getElementById('phValue').textContent = `pH: ${phValue}`;
    }

    // Update real-time data every second
    setInterval(updateRealTimeData, 1000);

    // Initial update on page load
    updateRealTimeData();
 