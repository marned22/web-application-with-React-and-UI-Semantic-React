import React from "react"
import { Divider, Label } from "semantic-ui-react"
import GolmaniF from "./GolmaniF"
import Odbrana from "./Odbrana"
import Sredina from "./SredenRed"
import Napad from "./Napad"
import Strucen from "./Strucen.js"



const IgraciF = () => (
        <>  
            <Divider horizontal>
                <Label size='massive' color='blue' >
                     ГОЛМАНИ
                </Label>
            </Divider>
            <GolmaniF />
            <Divider horizontal>
                <Label size='massive' color='blue' >
                     ОДБРАНА
                </Label>
            </Divider>
            <Odbrana />
            <Divider horizontal>
                <Label size='massive' color='blue' >
                     СРЕДЕН РЕД
                </Label>
            </Divider>
            <Sredina />
            <Divider horizontal>
                <Label size='massive' color='blue' >
                     НАПАД
                </Label>
            </Divider>
            <Napad />
            <Divider horizontal>
                <Label size='massive' color='green' >
                     СТРУЧЕН ШТАБ
                </Label>
            </Divider>
            <Strucen />
        </>
)

export default IgraciF