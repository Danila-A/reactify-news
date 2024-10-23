import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';

export default function Header() {
    return (
        <header className={ styles.header }>
            <h1 className={ styles.h1 }>reactify news</h1>
            <p className={ styles.date }>{ formatDate(new Date()) }</p>
        </header>
    )
}
