import React, { useState, useEffect } from "react";

const Dashboard = () => {
    const [metrics, setMetrics] = useState<any>(null);

    useEffect(() => {
        // Aquí haremos la llamada al backend para obtener las métricas
    fetch('/api/facebook/metrics')
    .then(response => response.json())
    .then(data => setMetrics(data))
    .catch(error => console.error('Error fetching metrics:', error));
    }, []);

    return (
        <div className="dashboard">
      <h1>Dashboard de Redes Sociales</h1>
      {metrics ? (
        <div className="metrics">
          <p><strong>Seguidores:</strong> {metrics.followers}</p>
          <p><strong>Interacciones:</strong> {metrics.interactions}</p>
          <p><strong>Alcance:</strong> {metrics.reach}</p>
          {/* Añade más métricas según sea necesario */}
        </div>
      ) : (
        <p>Cargando métricas...</p>
      )}
    </div>
    );
};

export default Dashboard;