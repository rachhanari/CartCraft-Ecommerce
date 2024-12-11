import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/Filter_Context';
import FormatPrice from "../Helpers/FormatPrice";
import Button from "../styles/Button"

const FilterSection = () => {
  const { 
    filters: { text, category, company, color, price, maxPrice, minPrice }, 
    all_products, 
    updateFilterValue, 
    clearFilter 
  } = useFilterContext();


  const getUniqueData = (data, property) => {
    let newVal = data.map((curEle) => curEle[property]);
    if (property === "colors") {
      newVal = newVal.flat(); 
    }
    return ["all", ...new Set(newVal)];
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      {/* Search Input */}
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </div>

      {/* Category Filter */}
      <div className="filter-category">
        <h3>Category</h3>
        <div className="category-list">
          {categoryData.map((curCategory, index) => (
            <a
              key={index}
              name="category"
              onClick={(e) => {
                e.preventDefault();
                updateFilterValue({ target: { name: 'category', value: curCategory } });
              }}
              className={category === curCategory ? "active" : ""}
            >
              {curCategory}
            </a>
          ))}
        </div>
      </div>

      {/* Company Filter */}
      <div className="filter-company">
        <form action="#">
          <select
            name="company"
            id="company"
            value={company}
            className="filter-company--select"
            onChange={updateFilterValue}
          >
            {companyData.map((curEle, index) => (
              <option key={index} value={curEle} name="company">
                {curEle}
              </option>
            ))}
          </select>
        </form>
      </div>

      {/* Color Filter */}
      <div className="filter-colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => (
            <button
              key={index}
              type="button"
              value={curColor}
              style={{ backgroundColor: curColor }}
              name="color"
              className={`btnStyle ${color === curColor ? "active" : ""}`}
              onClick={(e) => updateFilterValue(e)}
            >
              {color === curColor ? "✓" : ""}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          name="price"
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilter}>
          Clear Filter
        </Button>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding-bottom: 1rem;
    font-weight: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  .filter-category {
    .category-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.2rem;

      a {
        text-decoration: none;
        color: black;
        cursor: pointer;
        transition: color 0.3s, text-decoration 0.3s;
        font-size: 20px;

        &:hover {
          color: #007bff;
          text-decoration: underline;
        }
      }

      .active {
        color: #6a5acd;
        text-decoration: underline;
      }
    }
  }

  .filter-company {
    .filter-company--select {
      padding: 0.6rem 1rem;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  .filter-colors {
    .filter-color-style {
      display: flex;
      gap: 1rem;

      button {
        width: 2rem;
        height: 2rem;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        outline: none;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .filter_price {
    input[type="range"] {
background: none;
border: none;
shadow:none;
cursor: pointer;
    }
`;


export default FilterSection;
