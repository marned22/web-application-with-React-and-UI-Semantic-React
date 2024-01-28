import React from 'react'
import { Card } from 'semantic-ui-react'
import Pikeri from './Pikeri'
import Bekovi from './Bekovi'
import Krila from './Krila'


const Igraci = () => (
    <Card.Group centered itemsPerRow={5}>
      <Pikeri />
      <Bekovi />
      <Krila />
    </Card.Group>
)

export default Igraci