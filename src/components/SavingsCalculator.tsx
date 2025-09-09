import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Card from "./Card";
import { calculateSavings } from "../utils/calculate";

const SavingsCalculator: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const amt = parseFloat(amount);
    const pct = parseFloat(percent);
    if (isNaN(amt) || isNaN(pct)) {
      setResult(null);
      return;
    }
    const res = calculateSavings(amt, pct);
    setResult(res);
  };

  return (
    <Card>
      <h2>Calculadora de Ahorro</h2>
      <InputField value={amount} onChange={setAmount} placeholder="Monto total" />
      <InputField value={percent} onChange={setPercent} placeholder="Porcentaje de ahorro" />
      <Button onClick={handleCalculate}>Calcular</Button>
      {result !== null && <p>Ahorro: ${result.toFixed(2)}</p>}
    </Card>
  );
};

export default SavingsCalculator;
