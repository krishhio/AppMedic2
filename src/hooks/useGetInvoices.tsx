import { useEffect, useState } from 'react';

import { IInvoicePreview } from '../interfaces/invoice';
import axios from 'axios';

async function getInvoices() {
  const result = await axios.get('./data/invoices.json');
  return result.data as IInvoicePreview[];
}

export function useGetInvoices(): IInvoicePreview[] {
  const [invoices, setInvoices] = useState<IInvoicePreview[]>([]);

  useEffect(() => {
    getInvoices().then((data) => {
      setInvoices(data);
    });
  }, []);

  return invoices;
}
