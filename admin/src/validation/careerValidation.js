import { z } from "zod";

export const careerSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  category: z
    .string()
    .min(1, "Category is required"),

  company: z
    .string()
    .min(1, "Company is required"),

  location: z
    .string()
    .min(1, "Location is required"),

  salary: z
    .string()
    .min(1, "Salary is required"),

  shortDescription: z
    .string()
    .min(10, "Short description required"),

  description: z
    .string()
    .min(20, "Description required"),
});