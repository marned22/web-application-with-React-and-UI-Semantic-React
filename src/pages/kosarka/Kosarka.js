import React from "react";
import { Segment, Divider, Label, Image } from "semantic-ui-react";
import HeaderKosarka from "./HeaderKosarka";
import IgraciK from "./IgraciK";
import Statistika from "./Statistika";



export default function Kosarka() {
  return(
    <>
      <Segment inverted color='red'>
          <HeaderKosarka />
        <Divider horizontal>
                <Label size='massive' color='orange' >
                     ИГРАЧИ
                </Label>
        </Divider>
          <IgraciK />
        <Divider horizontal>
                <Label size='massive' color='orange' >
                     СТАТИСТИКА ИГРАЧИ
                </Label>
        </Divider>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/kosarka/Statistika.png"
              size="massive"
              centered
            />
          </div>
        <Divider horizontal>
                <Label size='massive' color='orange' >
                     СТАТИСТИКА ТИМ
                </Label>
        </Divider>
          <Statistika />
        <Divider horizontal>
                <Label size='massive' color='orange' >
                     ПРВА МАКЕДОНСКА ЛИГА
                </Label>
        </Divider>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/images/kosarka/Tabela.png"
                size="big"
                centered
              />
            </div>
      </Segment>
    </>
  ) 
} 