import React from 'react';
import Logo from '../../assets/logo-rocket.svg';

import { Button } from './styles';

export interface Props { //coloco exportar para ela ir para dentro do styles
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="Rocketseat" /> /* Se isHome for true, mostro o logo, caso contrário não mostro nada */}
        </Button>
    )
}

export default ServerButton;