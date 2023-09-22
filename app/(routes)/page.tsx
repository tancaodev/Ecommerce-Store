import getBillboard from '@/actions/get-billboard';

import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';

export const revalidate = 0;

const Homepage = async () => {
  const billboard = await getBillboard('50b9a2a3-33dd-47e4-9048-603c22cad340');

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default Homepage;
