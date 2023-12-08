import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const batchSchema = z.object({
  model: z
  .coerce
  .number(),
  quantity: z
  .coerce
  .number(),
  licenseLevel: z
  .coerce
  .number(),
  date: z
  .coerce
  .date(),
  comment: z.string(),
});



export const fclRouter = createTRPCRouter({



    //create batch
    createBatch: publicProcedure
    .input(batchSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.batch.create({
        

        data: {
          model: input.model,
          date: input.date,
          quantity: input.quantity,
          licenseLevel: input.licenseLevel,
          comment: input.comment,
          machineNumbers: {
            create: Array.from({ length: input.quantity }).map(() => ({
              model:input.model,
              date: input.date,
              serialNumber: Math.random().toString(36).substring(5), 
            })),
          },
        },


      });
    }),

});
