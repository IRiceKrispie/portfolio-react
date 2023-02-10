import React from 'react';

const styles = {
    footerStyle: {
        position: 'fixed',
        left: '0px',
        bottom: '0px',
        height: '50px',
        width: '100%',
        background: '#999',
        fontSize: '30px',
        textAlign: 'center',
    },
};

function Footer() {
    return(
    <footer style={styles.footerStyle}>This is the footer</footer>
    );
    
}

export default Footer;