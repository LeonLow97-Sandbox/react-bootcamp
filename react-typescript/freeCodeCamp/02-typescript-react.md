## TypeScript with React

### Functional Components

```ts
const App: React.FC = () => {}
```

### `useState`

- `const [todo, setTodo] = useState<string>('');`

### props

```ts
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }: Props) => {}
```