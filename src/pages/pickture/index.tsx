import React from 'react';


type TPictureProps = {
  title?: string;
}

export const Picture: React.FC<TPictureProps> = ({title}) => {
  console.log(title);
  return (
    <>
      картинка
    </>
  );
}
