import React from "react";
import { Table } from "react-bootstrap";
import { selector } from "../database/database";
import { map } from "lodash";
class Data extends React.Component {
  selectedData = selector(this.props.city, this.props.info);
  tableRow = (center) => {
    return (
      <tr>
        <td>{center.name}</td>
        <td>{center.contact}</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>{map(this.selectedData, this.tableRow)}</tbody>
        </Table>
      </div>
    );
  }
}

export default Data;
