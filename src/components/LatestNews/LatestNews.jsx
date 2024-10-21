
import { getLatestNews } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import BannersList from '../BannerList/BannerList';
import styles from './styles.module.css';

export default function LatestNews() {

    const {data, isLoading} = useFetch(getLatestNews);

    return (<section className={ styles.section }>
        <BannersList banners={ data && data.news } isLoading={ isLoading } />
    </section>);
}
