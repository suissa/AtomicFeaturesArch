import { z } from "zod";

const telefoneSchema = z
  .string()
  .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone deve estar no formato (XX) XXXXX-XXXX");

export default telefoneSchema;