import React from 'react';

type TButtonProps = {
  textOptions: {visible: boolean; text: string};

}

export const Button: React.FC<TButtonProps> = ({textOptions: {text, visible}}) => {
  return (
    <div className={'button-container'}>
      {visible && <span>{text}</span>}
      <img src={'#'}/>
    </div>
  );
}
