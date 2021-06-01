import React, { useState } from 'react';
import {Wrapper} from '../dashboard/table/styled_userstab';

export const SearchTable = ({setIsNPS}) => {
  const [ data, setData ] = useState([
    { "nome": "Pesquisa NPS", "data": "26/05/2021", "colaboradores": 100},
    { "nome": "Pesquisa Admissional", "data": "26/05/2021", "colaboradores": 10},
    { "nome": "Pesquisa Demissional", "data": "26/05/2021", "colaboradores": 5}
  ]);

  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false)
  );

  const handleOnChange = (position) => {
    setIsNPS(position);
    const updatedCheckedState = checkedState.map((item, index) =>
      (index === position) ? !item : item
    );
    setCheckedState(updatedCheckedState); 
  };

  return (
  <Wrapper>
    <table>
      <tr>
        <th></th>
        <th>Nome</th>
        <th>Data</th>
        <th>Colaboradores</th> 
      </tr>
        {
          data.map((item, index) => (
          <tr key={index}>
            <td>
              <input id={index} type='checkbox' value={item.nome} checked={checkedState[index]} onChange={() => handleOnChange(index)}/>
            </td>
            <td>{item.nome}</td>
            <td>{item.data}</td>
            <td>{item.colaboradores}</td>
          </tr> 
          ))
        }
    </table>
  </Wrapper>
  );
}

export default SearchTable;