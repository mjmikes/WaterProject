import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';
import { useEffect, useState } from 'react';

function Fingerprint() {
  const [fingerprint, setFingerprint] = useState<string>('');

  useEffect(() => {
    const generateFingerprint = async () => {
      try {
        const result = await getFingerprint();
        setFingerprint(result);
      } catch (error) {
        console.error('Error generating fingerprint:', error);
      }
    };

    generateFingerprint();
  }, []);

  return (
    <div>
      <h1>Fingerprint</h1>
      <p>{fingerprint}</p>
    </div>
  );
}

export default Fingerprint;
