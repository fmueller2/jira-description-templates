import React, { useState } from 'react';
import {
  SelectorWrapper,
  SelectorList,
  SelectorListContainer,
  SelectorOption,
  SelectorSelected
} from './Selector.styles';

function Selector(props: SelectorProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleState = (): void => setIsOpen(!isOpen);

  const handleSelectOption = (option: Selectable): void => {
    option.id !== props.current.id && props.onChange(option);
    setIsOpen(false);
  }

  return (
    <SelectorWrapper>
      <SelectorSelected onClick={() => handleToggleState()}>
        {props.current.name}
      </SelectorSelected>
      {isOpen && (
        <SelectorListContainer>
          <SelectorList>
            {props.list.map((item: Selectable) => (
              <SelectorOption className={props.current.id === item.id ? 'selected' : ''}
                              onClick={() => handleSelectOption(item)}>{item.name}</SelectorOption>
            ))}
          </SelectorList>
        </SelectorListContainer>
      )}
    </SelectorWrapper>
  )
}

export default Selector;