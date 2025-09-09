import React, { useState, useEffect } from "react";
import "./CurrencyConverter.css";

type CurrencyOption = "usd" | "eur" | "personal";

interface RateHistory {
  date: string;
  usd: number;
  eur: number;
}

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState("1");
  const [bs, setBs] = useState("");
  const [rate, setRate] = useState(0);
  const [customRate, setCustomRate] = useState("");
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState<CurrencyOption>("usd");
  const [selectedDate, setSelectedDate] = useState(""); 
  const [history, setHistory] = useState<RateHistory[]>([]);

  // Cargar tasa personalizada desde localStorage
  useEffect(() => {
    const savedRate = localStorage.getItem("customRate");
    if (savedRate) setCustomRate(savedRate);
  }, []);

  // Obtener historial de tasas
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("https://api.dolarvzla.com/public/exchange-rate/list");
        const data = await res.json();
        setHistory(data.rates);
        if (!selectedDate && data.rates.length > 0) {
          setSelectedDate(data.rates[0].date);
        }
      } catch (err) {
        console.error("Error obteniendo historial:", err);
      }
    };
    fetchHistory();
  }, []);

  // Actualizar tasa cuando cambian moneda, fecha o tasa personalizada
  useEffect(() => {
    const updateRate = () => {
      let activeRate = 0;
      if (currency === "personal") {
        const parsed = parseFloat(customRate);
        if (!isNaN(parsed) && parsed > 0) activeRate = parsed;
      } else if (selectedDate) {
        const rateObj = history.find((h) => h.date === selectedDate);
        if (rateObj) {
          activeRate = currency === "usd" ? rateObj.usd : rateObj.eur;
        }
      }
      setRate(activeRate);
      if (!isNaN(parseFloat(amount))) {
        setBs((parseFloat(amount) * activeRate).toFixed(2));
      }
    };
    updateRate();
  }, [currency, selectedDate, customRate, amount, history]);

  const getActiveRate = () => rate;

  const handleAmountChange = (value: string) => {
    setAmount(value);
    const amt = parseFloat(value);
    const activeRate = getActiveRate();
    if (value === "" || isNaN(amt) || amt < 0 || activeRate <= 0) {
      setBs("");
      setError(value !== "" && isNaN(amt));
      return;
    }
    setError(false);
    setBs((amt * activeRate).toFixed(2));
  };

  const handleBsChange = (value: string) => {
    setBs(value);
    const amt = parseFloat(value);
    const activeRate = getActiveRate();
    if (value === "" || isNaN(amt) || amt < 0 || activeRate <= 0) {
      setAmount("");
      setError(value !== "" && isNaN(amt));
      return;
    }
    setError(false);
    setAmount((amt / activeRate).toFixed(2));
  };

  const handleCustomRateChange = (value: string) => {
    setCustomRate(value);
    localStorage.setItem("customRate", value);
  };

  const handleDateChange = (value: string) => {
    setSelectedDate(value);
  };

  return (
    <div className="exchange-card">
      {/* Selector de moneda */}
      <div className="currency-selector">
        {["usd", "eur", "personal"].map((cur) => (
          <button
            key={cur}
            className={`currency-btn ${currency === cur ? "selected" : ""}`}
            onClick={() => setCurrency(cur as CurrencyOption)}
          >
            {cur.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Selector de fecha solo si no es personal */}
      {currency !== "personal" && history.length > 0 && (
        <div className="date-selector">
        <div className="date-input-wrapper">
            <input
            type="date"
            value={selectedDate}
            max={history[0].date}
            min={history[history.length - 1].date}
            onChange={(e) => handleDateChange(e.target.value)}
            />
        </div>
        </div>

      )}

      {/* Input de tasa personalizada */}
      {currency === "personal" && (
        <input
          type="number"
          value={customRate}
          onChange={(e) => handleCustomRateChange(e.target.value)}
          placeholder="Ingrese tasa personalizada"
          className="custom-rate-input"
        />
      )}

      {/* Input USD/EUR/Personal */}
      <div className="exchange-section">
        <div className="currency-selector-small">{currency.toUpperCase()}</div>
        <input
          className="amount-input"
          type="number"
          value={amount}
          onChange={(e) => handleAmountChange(e.target.value)}
        />
        <div className="equiv">{`Bs ${bs || "0.00"}`}</div>
      </div>

      {/* Input Bs */}
      <div className="exchange-section">
        <div className="currency-selector-small">Bs</div>
        <input
          className="amount-input"
          type="number"
          value={bs}
          onChange={(e) => handleBsChange(e.target.value)}
        />
        <div className="equiv">{`${currency.toUpperCase()} ${amount || "0.00"}`}</div>
      </div>

      {error && <p className="error-text">Ingrese un valor válido</p>}
    </div>
  );
};

export default CurrencyConverter;
