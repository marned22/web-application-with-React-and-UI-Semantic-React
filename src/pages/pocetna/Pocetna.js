import React from 'react';
import { Segment, Grid, Header, Image } from 'semantic-ui-react';
import StranaNovosti from '../../novosti/Novosti';
import Natprevari from '../../components/fudbal/Natprevari';
import Natp from '../../components/rakomet/Nat';
import RakometTabela from '../rakomet/Tabela';
import TabelaLs from '../rakomet/TabelaLS';
import FudbalTabela from '../fudbal/Tabela'


const Pocetna = () => {

  return (
    <>
      <Grid columns='equal' stackable>
        <Grid.Row stretched>
          <Grid.Column>
              <Natp />
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment textAlign='center' stacked style={{ backgroundColor: '#32CD32' }}>
              <StranaNovosti />
            </Segment>
          </Grid.Column>
          <Grid.Column>
              <Natprevari />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns='equal' stackable>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment fluid inverted tertiary color='red'>
              <Header inverted color='blue' as='h2' textAlign='center'>МАКЕДОНСКА СУПЕР ЛИГА (ГРУПА Б)</Header>
              <RakometTabela style={{ maxWidth: '100%' }} />
              <Image src="/images/rakomet/Trener.jpg" centered/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment fluid inverted color='blue'>
              <Header inverted color='red' as='h2' textAlign='center'>ЛИГА НА ШАМПИОНИ (ГРУПА А)</Header>
              <TabelaLs style={{ maxWidth: '100%' }} />
              <Image src="/images/rakomet/Strelci.jpg" centered/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment fluid inverted tertiary color='red'>
              <Header inverted color='blue' as='h2' textAlign='center'>МАКЕДОНСКА ФУДБАЛСКА ВТОРА ЛИГА</Header>
              <FudbalTabela style={{ maxWidth: '100%' }} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Pocetna;