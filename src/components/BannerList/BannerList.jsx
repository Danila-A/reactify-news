import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from './styles.module.css';

function BannersList({ banners }) {
    return (
        <ul className={ styles.banners }>
            {/* 
                ?. - это опциональная цепочка.
                Опциональная цепочка(?.) позволяет безопасно обращаться к свойсвам или методам объектов,
                котоыре могут быть null или undefined. Елси занчение перед ?. - этo null или undefined, операция прекращается, и 
                результатом будет undefined, вместо того, чтобы выбросить ошибку.
            */}
            { banners?.map((banner) => {
                return <NewsBanner key={ banner.id } item={ banner } />;
            })}
        </ul>
    )
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');

export default BannersListWithSkeleton;
