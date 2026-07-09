import { z } from "zod";

export const serviceInfoSchema = z.object({
  primaryServiceCategory: z
    .string()
    .min(2, "Primary Service Category is required."),

  keyServiceLines: z.string().min(2, "Key Service Lines are required."),

  industriesServed: z
    .string()
    .min(2, "Industries / Sectors Served is required."),

  teamSize: z.string().min(1, "Team Size is required."),

  deliveryCapacity: z.string().optional(),

  avgProjectSize: z.string().min(1, "Average Project Size is required."),

  minEngagementValue: z
    .string()
    .min(1, "Minimum Engagement Value is required."),

  avgTurnaroundTime: z.string().min(1, "Average Turnaround Time is required."),

  serviceDescription: z
    .string()
    .min(10, "Detailed Service Description is required."),

  deliveryModel: z.string().min(1, "Please select a Delivery Model.")
});
