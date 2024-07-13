import React, { useState } from 'react';

const InvestmentForm = () => {
  const [investment, setInvestment] = useState('');
  const [profitRate, setProfitRate] = useState('');
  const [profit, setProfit] = useState(null);

  const calculateProfit = () => {
    const totalTaka = parseFloat(investment);
    const profitPerLac = parseFloat(profitRate);
    const totalProfit = (totalTaka / 100000) * profitPerLac;
    setProfit(totalProfit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateProfit();
  };

  return (
    <div>
      <h1>Business Investment Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Investment Amount (in Taka):
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Profit Rate (Taka per lac per month):
            <input
              type="number"
              value={profitRate}
              onChange={(e) => setProfitRate(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Calculate Profit</button>
      </form>
      {profit !== null && (
        <div>
          <h2>Calculated Monthly Profit: {profit.toFixed(2)} Taka</h2>
        </div>
      )}
    </div>
  );
};

export default InvestmentForm;
