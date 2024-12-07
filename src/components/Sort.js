import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/Filter_Context';

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();

  return (
    <Wrapper className='sort-section'>
      <div className='sorting-list--grid'>
        <button
          className={grid_view ? 'active sort-btn' : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={!grid_view ? 'active sort-btn' : "sort-btn"}
          onClick={setListView}>
          <BsList className='icon' />
        </button>
      </div>

      <div className='product-data'>
        <p>{`${filter_products?.length || 0} Products Available`}</p>
      </div>

      <div className='sort-selection'>
        <form action='#'>
          <label htmlFor="sort"></label>
          <select
            name='sort'
            id='sort'
            className='sort-selection--style'
            onChange={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Name(A-Z)</option>
            <option value="z-a">Name(Z-A)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export default Sort;
