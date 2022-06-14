import React, { useRef, useState } from "react";
import {Container, Text, Content,Title, TextArea, AreaButton, ButtonToConfirm, ButtonToSend, Errors, Reports} from './styled';

export default function Home() {
    const [ ads, setAds ] = useState([]);
    const ref = useRef<any>(null);

    function validateAdsTxt(){
        const getRef = ref.current?.value

        const arr = [];
        const splitString = getRef.split('\n');
        arr.push(splitString);
        
        const filtered = arr[0].filter((item: any, index: any , inputArray: any ) => {
            return inputArray.indexOf(item) !== index
        })
        
        setAds(filtered);

    }

    return (
        <Container>
            {/* <Text> Home </Text> */}
            <Content>
                <Title> Validator ads.txt</Title>
                <TextArea 
                    ref={ref}
                />

                <AreaButton>
                    <ButtonToConfirm onClick={validateAdsTxt}>Validate</ButtonToConfirm>
                    <ButtonToSend>Send ads.txt</ButtonToSend>
                </AreaButton>
            </Content>

            <Errors>
                <Title> Errors </Title>
                <Reports>{ads}</Reports>
            </Errors>
        </Container>
    )
}