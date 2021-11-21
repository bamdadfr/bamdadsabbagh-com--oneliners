import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

/**
 * Index page
 * Path: /
 *
 * @returns {React.ReactNode} - Index page
 */
export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await router.replace('/ffmpeg/split');
    })();
  }, [router]);

  return (
    <>
    </>
  );
}
