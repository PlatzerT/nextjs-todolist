import { userRouter } from 'next/router';

export async function getStaticPaths() {
  const router = userRouter();
  console.log(router.query);
}

export async function getStaticProps({ params }) {
  console.log(params);
}

export default function TodoPage() {
  return <div>ok</div>;
}
