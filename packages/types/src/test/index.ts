import { TestSchema } from '@repo/schema';

export type TestType = TestSchema & {
  test: boolean;
};
