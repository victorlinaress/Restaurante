import React, { useState } from "react";
import * as C from "./styles";

const Form = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>

        <C.RadioGroup>
          <C.Input
            type="radio"
            id="income"
            defaultChecked
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />

          <C.Input type="radio" id="expense" name="group1" onChange={() => setIsExpense(!isExpense)} />

          <C.Label htmlFor="rExpenses">Saidas</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>
    </>
  );
};

export default Form;
