import React, { Component } from 'react'
import { Tab , Segment, Divider, Label } from 'semantic-ui-react'
import Roster from './Roster'
import Rezultati from '../rakomet/Rezultati/Rezultati'
import Istorija from './Istorija'
import SledniNatprevari from '../rakomet/sledni/SledniNatprevari'
import RakometTabela from './Tabela'
import TabelaLS from './TabelaLS'

const panes = [
  {
    menuItem: 'РОСТЕР',
    render: () => <Tab.Pane attached={false}><Roster /></Tab.Pane>,
  },
  {
    menuItem: 'РЕЗУЛТАТИ',
    render: () => <Tab.Pane attached={false}><Rezultati /></Tab.Pane>,
  },
  {
    menuItem: 'СЛЕДНИ НАТПРЕВАРИ',
    render: () => <Tab.Pane attached={false}><SledniNatprevari /></Tab.Pane>,
  },
  {
    menuItem: 'ТАБЕЛИ',
    render: () => <Tab.Pane attached={false}>
                    <Divider horizontal><Label  color='green' size='big'>МАКЕДОНСКА ЛИГА</Label></Divider>
                      <RakometTabela /> 
                    <Divider horizontal><Label color='green' size='big'>ЛИГА НА ШАМПИОНИ</Label></Divider> 
                      <TabelaLS />
                    </Tab.Pane>,
  },
  {
    menuItem: 'ИСТОРИЈА',
    render: () => <Tab.Pane attached={false}><Istorija /></Tab.Pane>,
  },
]

class TabMeni extends Component {


  render() {

    const tabMeniS = { fontSize: '18px' };

    return (
      <Segment inverted color='black' stacked>
        <Tab
          menu={{
            color: 'green',
            inverted: true,
            fluid: true,
            vertical: true,
            tabular: true,
            style:tabMeniS,
          }}
          panes={panes}
        />
      </Segment>
    )
  }
}

export default TabMeni 

