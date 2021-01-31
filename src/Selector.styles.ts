import Styled from 'styled-components';

export const SelectorWrapper = Styled.div`
  width: 200px;
  position: relative;
`;

export const SelectorSelected = Styled.div`
  cursor: pointer;
  height: 36px;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
  border-radius: 3px;
  font-size: 14px;
  background-color: #484B52;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
  &:after {
    font-family: "Adgs Icons";
    font-weight: normal;
    font-style: normal;
    speak: none;
    content: "\f15b";
    font-size: 16px;
    height: 16px;
    line-height: 1;
    margin-top: -8px;
    position: absolute;
    right: 7px;
    top: 50%;
    text-indent: 0;
    width: 16px;
  }
  &:hover {
    background-color: #595e68;
  }
`;

export const SelectorListContainer = Styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  min-width: 200px;
`;

export const SelectorList = Styled.ul`
  padding: 0;
  margin: 0;
  border: 1px solid #282c34;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
  border-radius: 3px;
`;

export const SelectorOption = Styled.li<SelectorOptionProps>`
  height: 36px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  list-style: none;
  background-color: #484B52;
  cursor: pointer;
  &.selected {
    cursor: default;
    background-color: #5f636d;
  }
  &:hover {
    background-color: #595e68;
  }
  &:first-child {
    border-radius: 3px 3px 0 0;
  }
  &:last-child {
    border-radius: 0 0 3px 3px;
  }
`;
