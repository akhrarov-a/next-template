import { useStore } from 'src/app.context';

/**
 * <Home /> props
 */
const useHomeProps = () => {
  const { home } = useStore();
  const { counter } = home;

  const onPlusClick = () => {
    home.count();
  };

  return {
    counter,
    onPlusClick
  };
};

export { useHomeProps };
