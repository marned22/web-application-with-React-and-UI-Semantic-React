import React, { Component } from 'react'
import { Accordion, Icon, Label, Segment } from 'semantic-ui-react'
import Golmani from './Igraci/Golmani'
import Igraci from './Igraci/Igraci'
import Strucen from './StrucenStab'

export default class Roster extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Segment inverted color='green'>
        <Accordion inverted>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
              <Label size='big' color='black'>
                ГОЛМАНИ
              </Label>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Golmani />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
              <Label size='big' color='black'>
                ИГРАЧИ
              </Label>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Igraci />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
              <Label size='big' color='black'>
                СТРУЧЕН ШТАБ
              </Label>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Strucen />
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
}