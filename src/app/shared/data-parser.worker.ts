/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  if (data.action === 'generate') {
    // Generate massive mock dataset (e.g., 500,000 records for stress test)
    const mockData = [];
    let baseValue = 1000;
    
    for (let i = 0; i < 500000; i++) {
      baseValue += (Math.random() - 0.5) * 50;
      mockData.push({
        timestamp: new Date(Date.now() - (500000 - i) * 60000).toISOString(),
        value: Number(baseValue.toFixed(2))
      });
    }

    // Returning data back to the main thread
    postMessage(mockData);
  }
});
