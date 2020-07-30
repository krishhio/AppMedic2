import { useEffect, useState } from 'react';

import { IBilling } from '../interfaces/patient';
import axios from 'axios';

async function getBillings() {
  const result = await axios.get('./data/patient-billings.json');
  return result.data as IBilling[];
}

export function useGetBillings(): IBilling[] {
  const [billings, setBillings] = useState<IBilling[]>([]);

  useEffect(() => {
    getBillings().then((data) => {
      setBillings(data);
    });
  }, []);

  return billings;
}
