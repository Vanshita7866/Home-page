import React from "react";

interface HeadingProps {
  level: number;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ level, text }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag>{text}</HeadingTag>;
};

export default Heading;
