import { useStore } from 'src/app.context';
import { useEffect } from 'react';

/**
 * <Home /> props
 */
const useHomeProps = () => {
  const { home } = useStore();
  const { counter } = home;

  const onPlusClick = () => {
    home.count();
  };

  useEffect(() => {
    console.log(process.env.stageName);
  }, []);

  return {
    counter,
    onPlusClick
  };
};

export { useHomeProps };
