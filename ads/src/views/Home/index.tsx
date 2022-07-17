import React, { useRef, useState } from "react";
import {Container, Text, Content,Title, TextArea, AreaButton, ButtonToConfirm, ButtonToSend, Errors, Reports, ContentText} from './styled';

export default function Home() {
    const [ receiveDataInput, setReceiveDataInput ] = useState<string[]>([]);
    const [ ads, setAds ] = useState<string[]>([]);
    const [ id, setIds ] = useState<string[]>([]);

    const ref = useRef<any>(null);

    function validateAdsTxt(){
        const getRef = ref.current?.value

        const arr = [];
        const splitString = getRef.split('\n');
        arr.push(splitString)
        setReceiveDataInput(arr);
        

        const filtered = arr[0].filter((item: string, index: number | any[] , inputArray: string | any[] ) => {
            return inputArray.indexOf(item) !== index
        })
        setAds(filtered);
    }

    function resetAdsTxt(){
        const cleanInput =  ref.current.value = [];
        setAds(cleanInput);
    }


    const getId = JSON.stringify(receiveDataInput).substring(33, 50);
    const sanitization = getId.replace(/"/g, "");
    console.log(sanitization, 'new')

        // receiveDataInput.forEach((id, index) => {
    //     // console.log(id, 'my id')
    //     const getId = JSON.stringify(id).substring(33, 50);
    //     const sanitization = getId.replace(/"/g, "");
    //     if(sanitization.length < 16 ){
    //         console.log( sanitization, 'id menor que 16')
    //         // setIds(sanitization);
    //     }
    // });
            
    // console.log(receiveDataInput, 'rereceiveDataInput')
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
                    <ButtonToSend onClick={resetAdsTxt}>Reset field</ButtonToSend>
                </AreaButton>
            </Content>

            <Errors>
                <Title> Errors </Title>
                <Reports>
                    {
                        ads.map((item) => {
                            return (
                                    <ContentText key={item}>
                                        <Text>{item}</Text>
                                    </ContentText>
                            )
                        })
                    }
                    {
                        id.map((item) => {
                            return (
                                    <ContentText key={item}>
                                        <Text>{item}</Text>
                                    </ContentText>
                            )
                        })
                    }
                </Reports>
            </Errors>
        </Container>
    )
}