import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import { MainCard } from './components/main-card/main-card';
import { Card } from './components/card/card';
import { Footer } from './components/footer/footer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Header />
            <MainCard />
            <div className={styles['card-container']}>
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    );
}

export default App;
