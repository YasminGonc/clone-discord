import React, { useRef, useEffect} from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef]);
    
    return (
        <Container>
            <Messages>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                    author="Yasmin Gonçalves"
                    date="04/09/2022"
                    content="Hoje é o meu aniversário!"
                    />
                ))}
                
                <ChannelMessage 
                    author="Diego Fernandes"
                    date="04/09/2022"
                    content={
                        <>
                            <Mention>@Yasmin</Mention>, me carrega no Lol de novo, por favor?
                        </>
                    }
                    hasMention
                    isBot
                />

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>

        </Container>
    )
}

export default ChannelData;