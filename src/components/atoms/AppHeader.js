import styles from '../../styles/app'

function AppHeader() {
    return (
        <header className="w-100 p-1" style={styles.appHeader}>
            <h4 className='text-white'>React Test App</h4>
        </header>
    );
}

export default AppHeader;