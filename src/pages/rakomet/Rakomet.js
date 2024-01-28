import React from "react";
import HeaderRakomet from "./HeaderRakomet";
import TabMeni from "./TabMeni"
import { Segment } from "semantic-ui-react";




export default function Rakomet() {
  return(
    <>
      <Segment inverted color='black'>
        <HeaderRakomet />
        <TabMeni />
      </Segment>
    </>
  ) 
} 