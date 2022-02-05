import React from "react";
import { Box, Btn } from "../../Components/UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Btn>Ver Mais</Btn>
    </Box>
  );
};
export default Extrato;
