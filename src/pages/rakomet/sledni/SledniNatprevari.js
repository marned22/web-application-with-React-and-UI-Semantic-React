import React, { useState, useEffect } from 'react';
import { Icon, Label, Table } from 'semantic-ui-react'

function SledniNatprevari () {
  const [sledniNData, setSledniNData] = useState([]);
  
    const size = 'huge';
    const size1 = 'big'
    const color = 'green'
    const color1 ='teal'

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/sledniR.json');
        const data = await response.json();
        setSledniNData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


    const PrikaziData = sledniNData.map (
        (info)=>{
            return(
                <Table.Row celled>
                    <Table.Cell>
                      <Label size={size1} color={color1} >
                        {info.ДАТУМВРЕМЕИМЕСТО}
                      </Label>
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                      <Label size={size1} color={color1} >
                        {info.НАТПРЕВАР}
                      </Label>
                     </Table.Cell>
                    <Table.Cell textAlign='center'>
                      <Label size={size1} color={color1} >
                        {info.НАТПРЕВАРУВАЊЕ}
                      </Label>
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                      <Label size={size1} color={color1} >
                        {info.ГРУПА}
                      </Label>
                    </Table.Cell>
                </Table.Row>
            )
        }
    )

  return(
      <Table celled inverted >
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>
                <Label size={size} color={color} >
                  <Icon name='time' />
                  ДАТУМ ВРЕМЕ МЕСТО
                </Label>
              </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>
              <Label size={size} color={color} >
                НАТПРЕВАР
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>
              <Label size={size} color={color} >
                НАПРЕВАРУВАЊЕ
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>
              <Label size={size} color={color} >
                ГРУПА
              </Label>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>  
          {PrikaziData}
        </Table.Body>
      </Table>
  )
}

export default SledniNatprevari;