import Link from 'next/link';
import React from 'react';

const NotFound = () => {
     return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      
      <Link href="/" className="mt-6 btn btn-primary">
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;