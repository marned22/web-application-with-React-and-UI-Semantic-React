import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import IgraciF from './igraci/IgraciF'
import Rezultati from './rezultati/rezultati';
import Sledni from './sledni/Sledni';
import Istorija from './Istorija';
import FudbalTabela from './Tabela';



class Meni extends Component {
  state = { activeItem: 'РОСТЕР' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu size='huge' color='blue' stackable inverted widths={5}>
          <Menu.Item
            name='РОСТЕР'
            active={activeItem === 'РОСТЕР'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='РЕЗУЛТАТИ'
            active={activeItem === 'РЕЗУЛТАТИ'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='СЛЕДНИ НАТПРЕВАРИ'
            active={activeItem === 'СЛЕДНИ НАТПРЕВАРИ'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='ТАБЕЛА'
            active={activeItem === 'ТАБЕЛА'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='ИСТОРИЈА'
            active={activeItem === 'ИСТОРИЈА'}
            onClick={this.handleItemClick}
          />
        </Menu>

        {activeItem === 'РОСТЕР' && <IgraciF />}
        {activeItem === 'РЕЗУЛТАТИ' && <Rezultati />}
        {activeItem === 'СЛЕДНИ НАТПРЕВАРИ' && <Sledni />}
        {activeItem === 'ТАБЕЛА' && <FudbalTabela />}
        {activeItem === 'ИСТОРИЈА' && <Istorija />}

      </div>
    );
  }
}
export default Meni; 
