import React from "react";
import { Link } from 'react-router-dom';
import { Grid, Menu, Container, Header, Segment, GridColumn } from "semantic-ui-react";


const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em", backgroundColor: "#282c34" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as='h4' inverted color="teal" content="БРЗО МЕНИ" />
              <Menu inverted vertical>
                <Menu.Item as={Link} to="/">
                  ПОЧЕТНА
                </Menu.Item>
                <Menu.Item as={Link} to="/fudbal">
                  ФУДБАЛ
                </Menu.Item>
                <Menu.Item as={Link} to="/rakomet">
                  РАКОМЕТ
                </Menu.Item>
                <Menu.Item as={Link} to="/kosarka">
                  КОШАРКА
                </Menu.Item>
                <Menu.Item as={Link} to="/ckembari">
                  ЧКЕМБАРИ
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h4' inverted color="teal" content="ЗА НАС" />
               <p style={{ color: "#61dafb" }}>
                Битола, град со богата историја и култура, претставува вистинска оаза за спортски ентузијасти.
                Во овој град, спортот не е само активност – тоа е начин на живот.
                Битола дише со спортската страст и во срцето на секој граѓанин тече пулсот на верување во спортот.
                Во Битола, спортот е вграден во дневниот ред на луѓето.
                Од раната возраст, децата се вовлекуваат во различни спортски активности, каде што го откриваат задоволството и предностите на здравиот начин на живот.
                Градот го окужува со спортска инфраструктура која олеснува тренинзи и натпревари.
              </p>
            </Grid.Column>
            <GridColumn width={4}>
               <div style={{ color: "#61dafb" }}>
                <span>КК ПЕЛИСТЕР</span>
                <br />
                <span>Адреса ул."Булевар 1 Мај" бр.61, Битола, 7000</span>
                <br />
                <br />
                <span>РК ЕУРОФАРМ ПЕЛИСТЕР</span>
                <br />
                <span>Адреса: Ул.Добривое Радосављевиќ бр.3 Битола 7000, Република Македонија</span>
                <br />
                <span>E-mail: info@rkeurofarmpelister.mk</span>
                <br />
                <br />
                <span>ФК ПЕЛИСТЕР</span>
                <br />
                <span>Адреса: ул.Булевар 1-ви Мај бр.61 7000 Битола</span>
                <span>E-Mail : fkpelister@fkpelister.mk</span>
              </div>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
