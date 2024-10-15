import { getCategories } from '../../api/apiNews';
import { TOTAL_PAGES } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import LatestNews from '../LatestNews/LatestNews';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import styles from './styles.module.css';

export default function NewsByFilters({ filters, changeFilter, isLoading, news}) {
    const {data: dataCategories} = useFetch(getCategories);

    function handleNextPage() {
        if( filters.page_number < TOTAL_PAGES ) {
            changeFilter('page_number', filters.page_number + 1);
        }
    }

    function handlePreviousPage() {
        if( filters.page_number > 1 ) {
            changeFilter('page_number', filters.page_number - 1);
        }
    }

    function handlePageClick(pageNumber) {
        changeFilter('page_number', pageNumber);
    }

    return (
        <section className={ styles.section } >
            { dataCategories ? (
                <Categories 
                    categories={ dataCategories.categories } 
                    selectedCategory={ filters.category } 
                    setSelectedCategory={ (category) => changeFilter('category', category) }
                />
            ) : null }

            <Search keywords={ filters.keywords } setKeywords={ (keywords) => changeFilter('keywords', keywords) } />

            <Pagination 
                handleNextPage={ handleNextPage } 
                handlePreviousPage={ handlePreviousPage } 
                handlePageClick={ handlePageClick } 
                currentPage={ filters.page_number }
                totalPages={ TOTAL_PAGES } 
            />

            <NewsList isLoading={ isLoading } news={ news } />

            <Pagination 
                handleNextPage={ handleNextPage } 
                handlePreviousPage={ handlePreviousPage } 
                handlePageClick={ handlePageClick } 
                currentPage={ filters.page_number }
                totalPages={ TOTAL_PAGES } 
            />
        </section>
    );
}