import React from 'react';
import {Button} from "@/components";

type THomePageProps = {
  path: string
}

export const HomePage: React.FC<THomePageProps> = ({path}) => {
  console.log(path);
  return (
    <>
      <Button textOptions={{text: 'Кнопка', visible: true}}/>
    </>
  );
}
