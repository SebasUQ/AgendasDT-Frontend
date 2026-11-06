import { MeetingStatus } from './meetingStatus.enum';

export interface MeetingCreateRequest {
  patientId: number;
  doctorId: number;
  chairId: number;
  startsAt: Date;
  endsAt: Date;
  reason: string;
}

export interface MeetingResponse{
  id: string;
  confirmationCode: string;
  patientId: number;
  doctorId: number;
  chairId: number;
  startAt: Date;
  endsAt: Date;
  reason: string;
  meetingStatus: MeetingStatus;
}

export interface MeetingUpdateRequest {
  doctorId: number;
  chairId: number;
  startsAt: Date;
  endsAt: Date;
  reason: string;
  version: number;
}

export interface MeetingListResponse {
  content: MeetingResponse[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
