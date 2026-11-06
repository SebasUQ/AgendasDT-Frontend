import { BillStatus } from './billStatus.enum';
import { PaymentMethod } from './paymentMethod.enum';

export interface BillCreateRequest {
  meetingId: number;
  lines: BillLineRequest[];
}

export interface BillLineRequest{
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface BillUpdateRequest {
  lines: BillLineRequest[];
  version: number;
}

export interface BillResponse {
  id: number;
  meetingId: number;
  patientId: number;
  issueAt: Date;
  lines: Line[];
  total: number;
  status: BillStatus
  paymentMethod: PaymentMethod;
  paidAt: Date;
  version: number;
}

export interface Line{
  lineNumber: number;
  description: string;
  quantity: number;
  unitPrice: number;
  subTotal: number;
}

export interface BillPaymentRequest {
  paymentMethod: PaymentMethod;
  version: number;
}
