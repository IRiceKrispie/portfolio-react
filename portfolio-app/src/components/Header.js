import React from 'react';

const styles = {
    headerStyle: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        background: '#999',
        fontSize: '30px',
        textAlign: 'center',
    },
};
function Header() {
    return(
    <header style={styles.headerStyle}>This is the Header</header>
    );
    
}

export default Header;