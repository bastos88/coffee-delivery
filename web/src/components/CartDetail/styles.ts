import styled from "styled-components";

export const Detail = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme["base-button"]};
  box-sizing: border-box;
  gap: 0.75rem;
  flex-wrap: wrap;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  > div {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
      font-size: 1rem;
      color: ${props => props.theme["base-subtitle"]};
      margin: 0;
    }

    .actions {
      display: flex;
      gap: 0.5rem;

      span {
        margin: 0 0.25rem;
        color: ${props => props.theme["base-title"]};
      }

      .remove {
        display: flex;
        align-items: center;
        background: ${props => props.theme["base-button"]};
        border: none;
        border-radius: 6px;
        padding: 0.5rem;
        gap: 0.25rem;
        color: ${props => props.theme["base-text"]};
        font-size: 0.75rem;
        text-transform: uppercase;
        cursor: pointer;

        svg {
          color: ${props => props.theme["purple"]};
        }

        &:hover {
          background: ${props => props.theme["base-hover"]};
        }
      }
    }
  }

  .price {
    font-weight: bold;
    color: ${props => props.theme["base-text"]};
    margin-left: auto;
    white-space: nowrap;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    align-items: flex-start;

    img { width: 3.5rem; height: 3.5rem; margin-right: 0.75rem; }

    .price {
      width: 100%;
      text-align: right;
      margin-left: 0;
      margin-top: 0.5rem;
    }
  }
`
