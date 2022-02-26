import React from 'react';
import Table from 'react-bootstrap/Table';
import PipelineCardRating from './PipelineCardRating';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { token,headings } from './TempData';
import { useHistory } from 'react-router';

const TableRow = ({ each,onClick }) => (
  <tr className="align-middle" onClick={onClick}>
    <td className="text-nowrap">{each.name}</td>
    <td className="text-nowrap">{each.symbol}</td>
    <td className="text-nowrap">
      <img
        className="d-flex justify-content-center"
        style={{ height: '40px', width: '40px' }}
        src={each.logo}
      />
    </td>
    <td className="text-nowrap">{each.contract}</td>
    <td className="text-nowrap">{each.Blockchain}</td>
    <td className="text-nowrap">
      <img
        className="d-flex justify-content-center"
        style={{ height: '40px', width: '40px' }}
        src={each.BlockchainLogo}
      />
    </td>
    <td className="text-nowrap">{each.State}</td>
    <td className="text-nowrap">
      <PipelineCardRating rating={each.Rating} />
    </td>
    <td className="text-nowrap">{`${each.Price}$`}</td>
    <td className="text-nowrap">{`${each.PriceChange}$`}</td>
    <td className="text-end">{`${each.MarketCap}$`}</td>
  </tr>
);
const List = () => {
  const history=useHistory();
  return (
    <Table responsive striped hover>
      <thead>
        <tr>
          {headings.map(each => (
            <th key={each} scope="col">
              {each}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {token.map(data => (
          
            <TableRow onClick={()=> history.push(`/app/DetailedView/${data.id}`)} key={data.id} each={data} />
          
        ))}
      </tbody>
    </Table>
  );
};
List.propTypes = {
  token: PropTypes.array,
  headings: PropTypes.array
};
TableRow.propTypes = {
  each: PropTypes.object
};
export default List;
