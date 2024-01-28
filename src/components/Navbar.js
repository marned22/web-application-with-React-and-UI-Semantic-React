import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';

export default class MenuExampleStackable extends Component {
  state = { activeItem: 'ПОЧЕТНА', menuVisible: false, isMobile: window.innerWidth <= 767 };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleToggleMenu = () => {
    this.setState((prevState) => ({ menuVisible: !prevState.menuVisible }));
  };

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth <= 767, menuVisible: false });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

 render() {
  const { activeItem, menuVisible, isMobile } = this.state;

    return (
      <Segment inverted>
        {isMobile ? (
          <Menu size="large" stackable inverted secondary>
            <Menu.Item
              as={NavLink} to="/"
              active={activeItem === 'ПОЧЕТНА'}
              onClick={this.handleItemClick}
            >
              <img src="/images/logo.png" alt="logo" style={{ height: '40px', width: 'auto' }} />
            </Menu.Item>
            <Menu.Item position="right" onClick={this.handleToggleMenu}>
              <Icon name={menuVisible ? 'close' : 'bars'} size="large" />
            </Menu.Item>

            {menuVisible && (
              <React.Fragment>
                <Menu.Item
                  as={NavLink} to="/"
                  name='ПОЧЕТНА'
                  active={activeItem === 'ПОЧЕТНА'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={NavLink} to="/fudbal"
                  name='ФУДБАЛ'
                  active={activeItem === 'ФУДБАЛ'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={NavLink} to="/rakomet"
                  name='РАКОМЕТ'
                  active={activeItem === 'РАКОМЕТ'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={NavLink} to="/kosarka"
                  name='КОШАРКА'
                  active={activeItem === 'КОШАРКА'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={NavLink} to="/ckembari"
                  name='ЧКЕМБАРИ'
                  active={activeItem === 'ЧКЕМБАРИ'}
                  onClick={this.handleItemClick}
                />
              </React.Fragment>
            )}
          </Menu>
        ) : (
          <Menu size="large" stackable inverted secondary>
            <Menu.Item
              as={NavLink} to="/"
              active={activeItem === 'ПОЧЕТНА'}
              onClick={this.handleItemClick}
            >
              <img src="/images/logo.png" alt="logo" style={{ height: '40px', width: 'auto' }} />
            </Menu.Item>
            <Menu.Item
              as={NavLink} to="/"
              name='ПОЧЕТНА'
              active={activeItem === 'ПОЧЕТНА'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink} to="/fudbal"
              name='ФУДБАЛ'
              active={activeItem === 'ФУДБАЛ'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink} to="/rakomet"
              name='РАКОМЕТ'
              active={activeItem === 'РАКОМЕТ'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink} to="/kosarka"
              name='КОШАРКА'
              active={activeItem === 'КОШАРКА'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink} to="/ckembari"
              name='ЧКЕМБАРИ'
              active={activeItem === 'ЧКЕМБАРИ'}
              onClick={this.handleItemClick}
            />
          </Menu>
        )}
      </Segment>
    );
  }
}