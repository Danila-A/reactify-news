import styles from './styles.module.css';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image';
import withSkeleton from '../../helpers/hocs/withSkeleton';

function NewsBanner({ item }) {
    return (
        <section className={ styles.banner }>

            <Image image={item?.image}/>
            <h3 className={ styles.titel }>{ item.title }</h3>
            <p className={ styles.extra }>
                { formatTimeAgo(item.published) } by { item.author }
            </p>

        </section>
    );
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;