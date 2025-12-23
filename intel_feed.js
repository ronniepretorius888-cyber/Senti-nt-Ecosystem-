function updateFeed() {
    const logs = [
        "[INTEL] Scanning manifest...",
        "[INTEL] Analyzing IP Clauses...",
        "[INTEL] Watchdog Standing Guard...",
        "[INTEL] Sovereign Status: Vetted."
    ];
    const feedElement = document.getElementById('intel-feed');
    let i = 0;
    setInterval(() => {
        if (i < logs.length) {
            const entry = document.createElement('div');
            entry.textContent = logs[i];
            entry.style.color = "#00ffcc";
            entry.style.fontSize = "0.7rem";
            feedElement.prepend(entry);
            i++;
        }
    }, 2000);
}
updateFeed();
