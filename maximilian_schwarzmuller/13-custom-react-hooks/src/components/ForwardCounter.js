import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  // extract the return value of the custom hook
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
