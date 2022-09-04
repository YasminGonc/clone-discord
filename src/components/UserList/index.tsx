import React from "react";
import { User, Avatar, Container, Role } from './styles';

export interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>/*se for true, ganha uma flag*/} 
        </User>
    )
}

const UserList: React.FC = () => {
    return(
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname='Yasmin Gonc' />

            <Role>Offiline - 18</Role>
            <UserRow nickname='Diego Fernandes' isBot />
        </Container>
    )
}

export default UserList