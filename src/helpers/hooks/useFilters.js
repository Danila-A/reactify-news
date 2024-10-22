import { useState } from "react";

export function useFilters(initialFilters) {
    const [filters, setFilters] = useState(initialFilters);

    function changeFilter(key, value) {
        setFilters(prev => {
            // [key] - это вычисляемое(или динамическое) свойство объекта в JS.
            // Этот синтаксис позволяет задавать имя свойства объекта динамически, 
            // используя значение переменно key вместо фиксированного имени свойства.
            return {...prev, [key]: value};
        });
    }

    return { filters, changeFilter };
}
