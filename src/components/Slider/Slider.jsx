import React, { useRef } from 'react';
import styles from './styles.module.css';

export default function Slider({ children, step = 150 }) {
    const sliderRef = useRef(null);

    function scrollLeft() {
        sliderRef.current.scrollLeft -= step;
    }

    function scrollRight() {
        sliderRef.current.scrollLeft += step;
    }

    return (
        <div className={ styles.slider }>
            <button onClick={ scrollLeft } className={ styles.arrow }>{ '<' }</button>
            {/* 
                cloneElement позволяет тебе создать новый react элемент, используя
                другой элемент в качестве отправной точки.

                const clonedElement = cloneElement(element, props, ...children);
                1. element - это элемент, который будет скопирован.
                2. props - это пропсы, которые надо перезаписать. Если нет таких, то передаётся null
                   и cloneElement просто копирует пропсы с оригинала. Передаётся в виде объекта.
                3. childern - дочерние элементы, которые входят в копируемый элемент. Если
                   их несколько, то передаются в массиве. Не забывайте, что для элементов 
                   массива нужнен пропс key.
            */}
            { React.cloneElement(children, { ref: sliderRef }) }
            <button onClick={ scrollRight } className={ styles.arrow }>{ '>' }</button>
        </div>
    );
}
