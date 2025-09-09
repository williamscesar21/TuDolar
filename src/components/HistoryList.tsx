import React from "react";
import Card from "./Card";

const HistoryList: React.FC = () => {
  // Placeholder, luego se puede integrar con localStorage
  const history = [
    { id: 1, type: "Conversión", value: "$12.34" },
    { id: 2, type: "Ahorro", value: "$45.00" },
  ];

  return (
    <Card>
      <h2>Historial reciente</h2>
      {history.map((item) => (
        <p key={item.id}>{item.type}: {item.value}</p>
      ))}
    </Card>
  );
};

export default HistoryList;
