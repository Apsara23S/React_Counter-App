import { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      marginTop: "200px",
    },
    counterBox: {
      display: "inline-block",
      background: "#f8f9fa",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
    countNumber: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#333",
      margin: "10px 0",
    },
    button: {
      fontSize: "16px",
      padding: "10px 20px",
      margin: "5px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "0.3s",
    },
    incrementButton: {
      background: "#28a745",
      color: "#fff",
    },
    decrementButton: {
      background: "#dc3545",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <div style={styles.counterBox}>
        <h2 style={styles.countNumber}>{count}</h2>
        <button
          style={{ ...styles.button, ...styles.incrementButton }}
          onClick={handleIncrement}
        >
           Increment
        </button>
        <button
          style={{ ...styles.button, ...styles.decrementButton }}
          onClick={handleDecrement}
        >
           Decrement
        </button>
      </div>
    </div>
  );
}

root.render(<Counter />);

export default Counter;
