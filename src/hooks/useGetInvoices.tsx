import { useEffect, useState } from 'react';

import { IInvoicePreview, IInvoiceRecord } from '../interfaces/invoice';
import axios from 'axios';

async function getInvoices() {
  const result = await axios.get('./data/invoices.json');
  return result.data as IInvoicePreview[];
}

async function getInvoiceRecords(id: number = 0) {
  const result = await axios.get('./data/invoice.json');
  return result.data as IInvoiceRecord[];
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
