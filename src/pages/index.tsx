import type { NextPage } from 'next';
import Link from 'next/link';
import { Home } from 'src/modules/home';

const Page: NextPage = () => <Home />;

Page.getInitialProps = async (context: any) => {
  await context.store.home.getData();

  return { props: {} };
};

export default Page;
