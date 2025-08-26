import z from 'zod';

export const testSchema = z.object({
  title: z.string(),
});

export type TestSchema = z.infer<typeof testSchema>;
