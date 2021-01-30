import React from 'react';
import './Selector.css';

interface Selectable {
  id: string,
  name: string
}

interface SelectorProps {
  current: Selectable,
  list: Array<Selectable>,
  onChange: Function
}

function Selector(props: SelectorProps) {

  const select = (id: string): void => {
    const selected = props.list.find(item => item.id === id);
    if (!selected) return;
    props.onChange(selected);
  }

  return (
    <div className="jt-select-wrapper">
      <select value={props.current.id}
              onChange={ e => select(e.target.value)}>
        {props.list.map(item => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Selector;