import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import Error from "./Error";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export default function Formulario({ setMonedas }) {
  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [cripto, SelectCripto] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultaAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCryptos = resultado.Data.map((cripto) => {
        return {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
      });
      setCriptos(arrayCryptos);
    };
    consultaAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, cripto].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    setMonedas({ moneda, cripto });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCripto />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
}
