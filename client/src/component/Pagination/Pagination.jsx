/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

export default function Pagination({ paginate, todoPerPage, totalTodos, currentPage, nextPage, previousPage }) {
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(totalTodos / todoPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <div>
      <nav aria-label="Page navigation example mt-3">
        <ul className="pagination justify-content-center">
          {currentPage !== 1 && <li onClick={previousPage} className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>}

          {pageNumber.map(num => <li className={`page-item ${currentPage === num ? 'active' : ''} `} key={num} onClick={() => paginate(num)}><a className="page-link" href="#">{num}</a></li>)}
          {currentPage !== pageNumber.length && <li onClick={nextPage} >
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>}

        </ul>
      </nav>
    </div >
  )
}
