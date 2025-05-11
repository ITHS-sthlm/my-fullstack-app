import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fel vid hämtning av API-data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Data från API:</h1>
      {loading ? (
        <p>Laddar...</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Kunde inte hämta data.</p>
      )}
    </div>
  );
}

export default App;
