import React, { useState, useEffect } from 'react';
import dados from './example-data.json';
import { Wrapper } from './styled_userstab';
import api from '../../../../services/api.js';


export const UsersTable = ({setSelecionado}) => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    api({
        method: 'post',
        url: '/list_colabs',
        data: {
          empresa: "ioasys"
        }
     }).then((res) => {
        console.log(res.data);
        setData(res.data);
      })
     .catch((error) => console.log(error)
     )
  },[])

  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false)
  );

  const handleOnChange = (position) => {
    setSelecionado(data[position].nome);
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
        <th>Cargo</th> 
      </tr>
        {
          data.map((item, index) => (
          <tr key={index}>
            <td>
              <input id={index} type='checkbox' value={item.nome} checked={checkedState[index]} onChange={() => handleOnChange(index)}/>
            </td>
            <td>{item.nome}</td>
            <td>{item.cargo}</td>
          </tr> 
          ))
        }
    </table>
  </Wrapper>
  );
}

export default UsersTable;