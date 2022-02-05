import React, { useState } from "react";
import styled from "styled-components";
import dinheiro from "../../assets/images/dinheiro.svg";
import olho_icone from "../../assets/images/olho.svg";
import privado from "../../assets/images/privado.svg";
import { Icone, Box, Saldo, Detalhe, Btn } from "../UI/index";


const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box className="box">
      <h2>Conta</h2>
      <Box style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <Detalhe>
          <Icone src={dinheiro} alt="Ícone Saldo" />
        </Detalhe>
        {toggleState ? (
          <Box className="saldo">
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Box>
        ) : null}
      </Box>

      <Btn onClick={toggleHandler}>
        <IconeMargin src={toggleState ? privado : olho_icone} alt="Privacidade do Saldo" />
      </Btn>
    </Box>
  );
};

export default Conta;
