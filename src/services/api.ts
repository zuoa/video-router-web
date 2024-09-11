import { request } from "umi";
import { Publisher } from "@/models/publisher";

export async function submitShare(data: any) {
  return request("/api/share", {
    method: "POST",
    data,
  });
}

interface PublisherResponse {
  code: number;
  data: Publisher[];
  message: string;
  success: boolean;
}

export async function fetchPublishers(): Promise<Publisher[]> {
  const response: PublisherResponse = await request("/api/publisher/list", {
    method: "GET",
  });
  return response.data;
}
