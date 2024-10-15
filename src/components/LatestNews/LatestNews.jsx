
import BannersList from '../BannerList/BannerList';
import styles from './styles.module.css';

export default function LatestNews({ banners, isLoading}) {
    return (<section className={ styles.section }>
        <BannersList banners={ banners } isLoading={ isLoading } />
    </section>);
}