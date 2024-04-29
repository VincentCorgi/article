import { object, number, string, TypeOf } from "zod";

// no series
const noneParams = {
  params: object({}).strict({
    message: "not allowed extra params",
  }),
};
const nonePayload = {
  body: object({}).strict({
    message: "not allowed extra body",
  }),
};
const noneQuery = {
  query: object({}).strict({
    message: "not allowed extra query",
  }),
};
const params = {
  params: object({
    corgiId: string({
      invalid_type_error: "corgiId type must be number.",
      required_error: "corgiId is required.",
    }).length(3, "Must be exactly 3 characters long"),
  }).strict(),
};
const addCorgiPayload = {
  body: object({
    corgiId: string({
      invalid_type_error: "corgiId type must be number.",
      required_error: "corgiId is required.",
    }).length(3, "Must be exactly 3 characters long"),
    name: string({
      invalid_type_error: "Name type must be string.",
      required_error: "Name is required.",
    })
      .min(1, "Name must be 1 or more characters long.")
      .max(10, "Name must be 10 or fewer characters long."),
    age: number({
      invalid_type_error: "Age type must be number",
      required_error: "Age is required.",
    })
      .min(0, "Age must be greater than or equal to 0")
      .max(32, "Age must be less than or equal to 32"),
  }).strict(),
};

export const addCorgiSchema = object({
  ...noneParams,
  ...addCorgiPayload,
  ...noneQuery,
});
export const getCorgiByIdSchema = object({
  ...params,
  ...nonePayload,
  ...noneQuery,
});

export type addCorgiInput = TypeOf<typeof addCorgiSchema>;
export type getCorgiByIdInput = TypeOf<typeof getCorgiByIdSchema>;
