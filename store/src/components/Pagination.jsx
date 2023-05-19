import React from "react";

export const Pagination = ({page, totalPages, prevPage,nextPage ,setPage}) => {
    return <div className="pagination">
        <p className="text">
            {page}/{totalPages}
        </p>
        <div className='btns'>
            <button onClick={prevPage} className="page">
                &larr;
            </button>
            {[...Array(totalPages).keys()].map((el) => (
                <button
                    onClick={() => setPage(el + 1)}
                    key={el}
                    className={`page ${page === el + 1 ? "active" : ""}`}
                >
                    {el + 1}
                </button>
            ))}
            <button onClick={nextPage} className="page">
                &rarr;
            </button>
        </div>
    </div>
}