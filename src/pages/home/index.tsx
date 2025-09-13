import React from 'react';
import {Outlet} from "react-router";

import {Button} from "@/components";

type THomePageProps = {
  title?: string;
}

export const HomePage: React.FC<THomePageProps> = ({title}) => {
  console.log(title);
  return (
    <>
      <Button textOptions={{text: 'Кнопка', visible: true}}/>
      <Outlet />
    </>
  );
}
