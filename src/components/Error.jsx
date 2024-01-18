import React from 'react'
import styled from '@emotion/styled'

const Texto=styled.div`
    background-color: #b7322c;
    color:#FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "Lato";
    font-weight: 700;
    text-align: center;
`

export default function Error({children}) {
  return (
    <Texto>
      {children}
    </Texto>
  )
}
