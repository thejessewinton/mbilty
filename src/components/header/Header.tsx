import Image from 'next/image';
import { trpc } from '../../utils/trpc';

const Avatar = ({ image, alt }: { image: string; alt: string }) => (
  <div className="rounded-full overflow-hidden w-10 h-10">
    <Image src={image || ''} alt={alt} width={40} height={40} />
  </div>
);

export const Header = () => {
  const { data: session } = trpc.useQuery(['users.get-current']);
  return (
    <header className="w-full px-3 py-6 flex justify-between items-center">
      Mbility
      <div className="flex items-center gap-3">
        {session?.user ? (
          <>
            {session.user.name}
            <Avatar
              image={session.user.image || ''}
              alt={session.user.name || ''}
            />
          </>
        ) : (
          <p>Loading..</p>
        )}
      </div>
    </header>
  );
};
