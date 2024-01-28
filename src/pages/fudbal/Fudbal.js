import React from "react";
import HeaderFudbal from "./HeaderFudbal";
import Meni from "./Meni";
import { Segment } from "semantic-ui-react";



export default function Rakomet() {
  return(
    <>
      <Segment inverted tertiary color='teal'>
        <HeaderFudbal />
        <Meni />
      </Segment>
    </>
  ) 
} 