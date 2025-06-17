import React, { useState } from "react";

function App() {
  const [bars, setBars] = useState([]);

  const addProgressBar = () => {
    const id = Date.now();
    setBars((prevBars) => [...prevBars, id]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={addProgressBar}>Add</button>
      <div style={{ marginTop: "20px" }}>
        {bars.map((id) => (
          <ProgressBar key={id} />
        ))}
      </div>
    </div>
  );
}

function ProgressBar() {
  const [fill, setFill] = useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setFill(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.bar,
          width: fill ? "100%" : "0%",
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "10px",
    backgroundColor: "#grey",
    borderRadius: "4px",
    marginBottom: "15px",
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    backgroundColor: "#008001",
    transition: "width 2s linear",
  },
};

export default App;
