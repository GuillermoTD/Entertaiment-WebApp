import { useState, useEffect } from "react";

const useHttpFetcher = (url) => {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [error, setError] = useState(null); // Estado para almacenar errores
  const [isLoading, setLoading] = useState(false); // Estado para indicar carga

  useEffect(() => {
    if (!url) return; // Si no hay URL, no se realiza la solicitud

    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reinicia el error antes de una nueva solicitud
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Almacena los datos obtenidos
      } catch (err) {
        setError(err.message); // Almacena el mensaje de error
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useHttpFetcher;
