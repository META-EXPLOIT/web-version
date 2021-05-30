import React, { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import dados from './example-data.json';
import Checkbox from './Checkbox.js';
import { colunas } from './colunas.js';
import { Wrapper } from './styled_userstab';
import api from '../../../../services/api.js';


export const UsersTable = () => {

   api({
      method: 'get',
      url: '/users',
   }).then((res) => {
      console.log(res.data);
   })
   .catch((error) => console.log(error)
   )

  const columns = useMemo(() => colunas, []);
  var dados1 = JSON.stringify(dados);
  dados1 = JSON.parse(dados1); 
  const data = useMemo(() => dados1, []);

  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow,
    selectedFlatRows,
  } = useTable({
    columns,
    data,
  }, 
  useRowSelect,
  (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          id: 'selection',
          Header: ({getToggleAllRowsSelectedProps}) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({row}) => (
            <Checkbox {...row.getToggleRowSelectedProps()} />
          )
        },
        ...columns
      ]
    })
  }
  );

  return (
  <Wrapper>
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map( column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))
              }
              
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return(
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </Wrapper>
  );
}

export default UsersTable;