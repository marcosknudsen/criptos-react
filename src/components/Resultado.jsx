import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;
export default function Resultado({ resultado }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          Precio actual: <span>{PRICE}</span>
        </Precio>
        <Texto>Precio máximo hoy: {HIGHDAY}</Texto>
        <Texto>Precio mínimo hoy: {LOWDAY}</Texto>
        <Texto>Variacion ultimas 24hs: {CHANGEPCT24HOUR}</Texto>
        <Texto>Ultima actualizacion: {LASTUPDATE}</Texto>
      </div>
    </Contenedor>
  );
}
