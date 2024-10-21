import { forwardRef } from 'react';
import styles from './styles.module.css';

// forwardRef(
//     function Categories({ categories, setSelectedCategory, selectedCategory }, ref) {
//         return (
//             <div ref={ ref } className={ styles.categories }>
                
//                 <button 
//                     onClick={ () => setSelectedCategory(null) } 
//                     className={ !selectedCategory ? styles.active : styles.item } 
//                 >
//                     All
//                 </button>

//                 { categories.map(category => {
//                     return (
//                         <button 
//                             onClick={ () => setSelectedCategory(category) } 
//                             className={ selectedCategory === category ? styles.active : styles.item } 
//                             key={ category }>
//                             { category }
//                         </button>
//                     )
//                 })}
//             </div>
//         )
//     }
// );

// Для удобвства в дальнейшем лучше использовать стрелочные функции в react.
// Так как если объявить функции традиционным способом, то не будет видно функции для export default
// Сверху представлен старый код ^^^
const Categories = forwardRef(
    ({ categories, setSelectedCategory, selectedCategory }, ref) => {
        return (
            <div ref={ ref } className={ styles.categories }>
                
                <button 
                    onClick={ () => setSelectedCategory(null) } 
                    className={ !selectedCategory ? styles.active : styles.item } 
                >
                    All
                </button>

                { categories.map(category => {
                    return (
                        <button 
                            onClick={ () => setSelectedCategory(category) } 
                            className={ selectedCategory === category ? styles.active : styles.item } 
                            key={ category }>
                            { category }
                        </button>
                    )
                })}
            </div>
        )
    }
);

Categories.displayName = 'Categories';

export default Categories;
