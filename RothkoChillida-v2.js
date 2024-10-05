const speed = 0.1;  // Geschwindigkeit
let cursorX = 0, cursorY = 0;
let mouseX = 0, mouseY = 0;
let isAnimating = false;  // Zum Deaktivieren der Animation

function animateCursor() {
    if (!isAnimating) return;  // Wenn Animation deaktiviert, verlasse Funktion

    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    const customCursor = document.getElementById('customCursor');
    customCursor.style.left = cursorX + 'px';
    customCursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}

document.addEventListener('mousemove', function(event) {
    if (!isAnimating) return;  // Nur bewegen, wenn die Animation aktiviert ist
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Funktion zum Aktivieren oder Deaktivieren der Animation
function checkViewport() {
    if (window.innerWidth > 900) {
        // Desktop-Ansicht: benutzerdefinierter Cursor aktivieren
        const customCursor = document.getElementById('customCursor');
        customCursor.style.display = 'block';  // Cursor sichtbar machen
        isAnimating = true;
        requestAnimationFrame(animateCursor);  // Animation nur einmal starten
    } else {
        // Tablet-Ansicht: benutzerdefinierten Cursor deaktivieren
        const customCursor = document.getElementById('customCursor');
        customCursor.style.display = 'none';  // Cursor ausblenden
        isAnimating = false;
    }
}

// Event Listener für das Ändern der Fenstergröße
window.addEventListener('resize', checkViewport);

// Initiale Überprüfung des Viewports
checkViewport();