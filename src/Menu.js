import React from "react";
import {Table} from 'react-bootstrap';
import Nivel from './Nivel';

const Menu = ({ items }) => {
  return (
    <div className="container">
      {items.map((item) => {
        const { id, title, img, desc, price, nivel } = item;
        return (
          <Table>
            <tbody >
              <tr key={id} className="menu-item*/}">
                  <td>
                      {/* <img src={img} alt={title} className="photo" /> */}
                      <div className="item-info">
                        <header>
                          <h4>{title}</h4>
                          <h4 className="price">${price}</h4>
                        </header>
                        <p className="item-text">{desc}</p>

                        {nivel > 0 &&
                          <Nivel estrellas={nivel}/>
                        }
                    
                      </div>
                  </td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </div>
  );
};

export default Menu;
