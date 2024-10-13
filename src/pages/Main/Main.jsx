import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getCategories, getNews } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

export default function Main() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const totalPages = 10;
    const pageSize = 10;

    async function fetchNews(currentPage) {
        try {
            setIsLoading(true);

            const response = await getNews(currentPage, pageSize);
            setNews(response.news);
            
            setIsLoading(false);
        } catch(error) {
            console.log(error);
        }
    }

    async function fetchCategories(currentPage) {
        try {
            const response = await getCategories();
            setCategories(["All", ...response.categories]);
        } catch(error) {
            console.log(error);
        }
    }
    console.log(categories);
    useEffect(() => {
        fetchCategories();
    }, [])

    useEffect(()=> {
        fetchNews(currentPage);
    }, [currentPage])

    function handleNextPage() {
        if( currentPage < totalPages ) {
            setCurrentPage(currentPage + 1);
        }
    }

    function handlePreviousPage() {
        if( currentPage > 1 ) {
            setCurrentPage(currentPage - 1);
        }
    }

    function handlePageClick(pageNumber) {
        setCurrentPage(pageNumber);
    }

    return (
        <main className={ styles.main }>
            { news.length > 0 && !isLoading ? <NewsBanner item={ news[0] } /> : <Skeleton count={ 1 } type={ 'banner' } /> }

            <Pagination 
                handleNextPage={ handleNextPage } 
                handlePreviousPage={ handlePreviousPage } 
                handlePageClick={ handlePageClick } 
                currentPage={ currentPage }
                totalPages={ totalPages } 
            />

            {!isLoading ? <NewsList news={ news } /> : <Skeleton type={ 'item' } count={ 10 }/> }

            <Pagination 
                handleNextPage={ handleNextPage } 
                handlePreviousPage={ handlePreviousPage } 
                handlePageClick={ handlePageClick } 
                currentPage={ currentPage }
                totalPages={ totalPages } 
            />
        </main>
    )
}