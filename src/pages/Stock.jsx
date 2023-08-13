import { useParams } from "react-router-dom";
import data from "../data";
import { useEffect, useState } from "react";

const Stock = () => {
  const [staticData, setStaticData] = useState([]);
  const [dynamicData, setDynamicData] = useState([]);
  let { symbol } = useParams();
  //b9881bc5e9148fc7c778a30517143c6d
  //https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=b9881bc5e9148fc7c778a30517143c6d

  useEffect(() => {
    setStaticData(data.filter((item) => item.symbol === symbol));

    getStock();
  }, [symbol]);

  async function getStock() {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=b9881bc5e9148fc7c778a30517143c6d`
    );
    const data = await response.json();
    console.log(data);
    setDynamicData(data);
  }

  // console.log(staticData.symbol);

  //optional chaining
  //or use staticData[0] &&
  //or use staticData?[0] &&
  //or use staticData.length > 0
  //it was giving error cuz it was running staticData and staticData[0].name was undefined,
  return (
    <div>
      <table cellPadding={30} align="center">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {staticData.length > 0 && (
            <tr>
              <td>{staticData[0].name}</td>
              <td>{staticData[0].lastPrice}</td>
              <td style={{ color: staticData[0].change < 0 ? "red" : "green" }}>
                {staticData[0].change.toFixed(3)}
              </td>
            </tr>
          )}
          {dynamicData.length > 0 && (
            <tr>
              <td>{dynamicData[0].name}</td>
              <td>{dynamicData[0].price}</td>
              <td
                style={{ color: dynamicData[0].change < 0 ? "red" : "green" }}
              >
                {dynamicData[0].change}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
