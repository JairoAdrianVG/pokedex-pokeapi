import React from "react";

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;


    return (
        <div className='pagination'>
            <div>
                <button onClick={onLeftClick} className='pagination-btn'>Prev</button>
                <div>{page} de {totalPages}</div>
                <button onClick={onRightClick} className='pagination-btn'>Next</button>
            </div>
        </div>
    )
};

export default Pagination;