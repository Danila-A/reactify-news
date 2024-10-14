import { useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getCategories, getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';

export default function Main() {
    const [filters, setFilters] = useState({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    });

    function changeFilter(key, value) {
        setFilters(prev => {
            return {...prev, [key]: value};
        });
    }

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    // Спросить GPT про данный синтаксис
    const {data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    });

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
        <main className={ styles.main }>
            { dataCategories ? (
                <Categories 
                    categories={ dataCategories.categories } 
                    selectedCategory={ filters.category } 
                    setSelectedCategory={ (category) => changeFilter('category', category) }
                />
            ) : null }

            <Search keywords={ filters.keywords } setKeywords={ (keywords) => changeFilter('keywords', keywords) } />

            <NewsBanner 
                isLoading={ isLoading } 
                item={ data && data.news && data.news[0] }
            />

            <Pagination 
                handleNextPage={ handleNextPage } 
                handlePreviousPage={ handlePreviousPage } 
                handlePageClick={ handlePageClick } 
                currentPage={ filters.page_number }
                totalPages={ TOTAL_PAGES } 
            />

            <NewsList isLoading={ isLoading } news={ data?.news } />

            <Pagination 
                handleNextPage={ handleNextPage } 
                handlePreviousPage={ handlePreviousPage } 
                handlePageClick={ handlePageClick } 
                currentPage={ filters.page_number }
                totalPages={ TOTAL_PAGES } 
            />
        </main>
    )
}
