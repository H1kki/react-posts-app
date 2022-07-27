import React from 'react';
import {getPagesArray} from "../../../utils/PagesCount";

const Pagination = ({page, changePage, totalPages}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={'pages__wrapper'}>
            {pagesArray.map(p => <span className={page === p ? 'page current_page' : 'page'} onClick={() => changePage(p)} key={p}>{p}</span>)}
        </div>
    );
};

export default Pagination;