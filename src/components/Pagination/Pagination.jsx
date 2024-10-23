import styles from './styles.module.css';

export default function Pagination({ totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage }) {
    return (
        <div className={ styles.pagination }>
            { currentPage <= 1 ? null : <button onClick={ handlePreviousPage } className={ styles.arrow }>{ '<' }</button> }
            
            <div className={ styles.list }>
                {[...Array(totalPages)].map((_, index) => (
                    <button 
                        onClick={() => handlePageClick(index + 1)} 
                        key={ index } 
                        disabled={ index + 1 === currentPage }
                        className={ styles.pageNumber }
                    >
                        { index + 1 }
                    </button>
                ))}
            </div>
            
            { currentPage >= totalPages ? null : <button onClick={ handleNextPage } className={ styles.arrow }>{ '>' }</button> }
        </div>
    );
}
