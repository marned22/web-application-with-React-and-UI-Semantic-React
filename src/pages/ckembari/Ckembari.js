import React from "react";
import { Segment, Divider, Label } from "semantic-ui-react";
import HeaderCkembari from "./HeaderCkembari";
import Istorija from "./Istorija";



export default function Kosarka() {
  return(
    <>
      <Segment inverted color='blue'>
        <HeaderCkembari />
        <Divider horizontal>
                <Label size='massive' color='purple' >
                     ИНФОРМАЦИИ ЗА ГРУПАТА
                </Label>
            </Divider>
        <Istorija />
      </Segment>
    </>
  ) 
} 
