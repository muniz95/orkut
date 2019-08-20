import React from "react";

interface IProps {
  children: JSX.Element;
}

const PrivateLayout = ({children}: IProps) => children;

export default PrivateLayout;
