export interface IInvoicePreview {
  icon: string;
  date: string;
  recipient: string;
  status: 'Paid' | 'Un-Paid';
  amount: string;
}
