const express = require('express');
const personajeRoutes = require('./src/routes/personajeRoutes');

const app = express();
const port = 3002;

// Middleware para parsear JSON
app.use(express.json());

// Rutas principales
app.use('/api/personajes', personajeRoutes);

// Middleware para rutas no definidas
app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Algo salió mal, inténtalo nuevamente" });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});
