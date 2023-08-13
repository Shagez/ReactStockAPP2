import data from "../data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const inputValue = e.target.value;
    const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, "");
    setInput(onlyLetters.toUpperCase());
  }

  function handleClick(item) {
    console.log(item);
    navigate(`/stock/${item.symbol}`);
  }
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/stock/${input}`);
    setInput("");
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Most Active Stocks
      </h1>
      <table cellPadding={30} align="center">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr key={idx} onClick={() => handleClick(item)}>
                <td>{item.name}</td>
                <td>{item.lastPrice}</td>
                <td
                  type="text"
                  style={{ color: item.change < 0 ? "red" : "green" }}
                >
                  {" "}
                  {item.change.toFixed(3)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginBottom: "200px" }}
      >
        <br />
        <h2>Don't find what you're looking for?</h2>
        <p>Search for it!</p>
        <input
          value={input}
          placeholder="Enter stock symbol.."
          required
          onChange={handleChange}
          type="text"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Dashboard;
