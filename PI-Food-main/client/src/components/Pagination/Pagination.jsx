import React from "react";
import style from './Pagination.module.css'
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage } from "../../redux/actions"
const Pagination = ({ recipesPerPage, recipes }) =>{

    const dispatch = useDispatch();
    const page = useSelector(state => state.currentPage)

    const pageNumbers = []
    const previousPage = page - 1
    const nextPage = page + 1
    
    for (let i=1; i<= Math.ceil(recipes/recipesPerPage); i++){
        pageNumbers.push(i)
    }
    
    const pagination = (num) =>{
        dispatch(changeCurrentPage(num))
    }

    return(
        <div >
            <div className='paginationConteiner'>
                <ul className="pages">
                { page >= 2 && 
                <button onClick={() => pagination(1)} className={style.buttonPrevNext}>{"<<"}</button>}
                { page >= 2 && 
                <button onClick={() => pagination(previousPage)} className={style.buttonPrevNext}>{"<"}</button>}
                {pageNumbers?.map(paged =>
                <button key={paged} onClick={() => pagination(paged)} className = {page === paged ? 'pagination-active' : 'pagination'}>{paged}</button>)}
                { page >= 1 && page < Math.ceil(recipes/recipesPerPage) && 
                <button onClick={() => pagination(nextPage)} className={style.buttonPrevNext}>{">"}</button>}
                { page < (recipes/recipesPerPage) && 
                <button onClick={() => pagination(Math.ceil(recipes/recipesPerPage))} className={style.buttonPrevNext}>{">>"}</button>}
                </ul>
            </div>
        </div>
 
)}

export default Pagination;