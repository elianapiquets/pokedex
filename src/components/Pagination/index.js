import ReactPaginate from 'react-paginate'
import { Container } from './styled'

export function Pagination({ pageCount, currentPage, onChangeHandler }) {
  return (
    <Container>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        initialPage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onChangeHandler}
        activeClassName={'item active '}
        breakClassName={'item break-me '}
        breakLabel={'...'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        nextClassName={'item next '}
        pageClassName={'item pagination-page '}
        previousClassName={'item previous'}
      />
    </Container>
  )
}

export default Pagination
