import React from 'react';
import MySelect from "./UI/MySelect/MySelect";
import MyInput from "./UI/MyInput/MyInput";

const PostsFilter = ({filters, setFilters}) => {
    console.log(filters, setFilters)
    return (
        <div>
            <MySelect defaultValue={'Сортировка'} options={[
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By description'}
            ]} value={filters.selectedSort} onChange={selectedSort => setFilters({...filters, selectedSort: selectedSort})}/>
            <MyInput placeholder={'Search...'} onChange={(e) => setFilters({...filters, search: e.target.value})} value={filters.search}/>
        </div>
    );
};

export default PostsFilter;