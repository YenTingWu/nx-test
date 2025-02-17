// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from './nx-welcome';
import { sum } from '@nx-test/react-lib';

export function App() {
  console.log(sum(1, 2));

  return (
    <div>
      <NxWelcome title="my-react-project" />
    </div>
  );
}

export default App;
