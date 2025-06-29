import { Child, ChildAsFC } from './Child';

const Parent = () => {
  const color: string = 'red';

  return <ChildAsFC color={color} onClick={() => console.log('Clicked!')}>
    Hello World!
  </ChildAsFC>
};

export default Parent;
