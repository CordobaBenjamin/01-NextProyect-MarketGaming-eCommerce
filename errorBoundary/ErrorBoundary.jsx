// ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente render muestre la interfaz de respaldo
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Aquí puedes agregar cualquier lógica para registrar el error
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de usuario de respaldo
      return <h1>Algo salió mal. Por favor, recarga la página.</h1>;
    }

    // Renderiza los componentes hijos si no hay error
    return this.props.children;
  }
}

export default ErrorBoundary;


    // Renderiza los componentes hijos si no hay error
