import React from "react";

interface IProps {
  children: JSX.Element;
}

const PublicLayout = ({children}: IProps) => children;

export default PublicLayout;
