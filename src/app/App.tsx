import FilledButton from '~/components/atom/button/FilledButton';
import OutlinedButton from '~/components/atom/button/OutlinedButton';

const App = () => {
  return (
    <>
      <h1>This is App.tsx</h1>
      <FilledButton onClick={null}>FilledButton</FilledButton>
      <OutlinedButton onClick={null}>OutlinedButton</OutlinedButton>
    </>
  );
};

export default App;
