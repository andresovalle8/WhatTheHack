// Placeholder to host a component
import React from 'react';

const Hours = () => {
  // Obtener el día actual de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)
  const today = new Date().getDay();

  // Establecer las horas de apertura basadas en el día de la semana
  const hours =
    today >= 1 && today <= 5 ? '10 a.m. a 4 p.m.' : '9 a.m. a 8 p.m.';

  return (
    <div>
      <h2>Horas de Apertura del Refugio</h2>
      <p>Hoy estamos abiertos de: {hours}</p>
    </div>
  );
};

export default Hours;