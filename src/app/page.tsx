import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg">HomePage</h2>
      <Link href={ticketsPath()} className="underline">
        Go to Tickets
      </Link>
      <div className="flex min-h-svh items-center justify-center">
        <Button>Click me</Button>
      </div>
    </div>
  );
};

export default HomePage;
