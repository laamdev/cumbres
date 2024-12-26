"use server";

import { z } from "zod";
// // import { returnValidationErrors } from "next-safe-action";
// // import { zfd } from "zod-form-data";
import { auth } from "@clerk/nextjs/server";

// // import { actionClient } from "@/lib/safe-actions";
import db from "@/lib/prisma";
import {
  CreateSummitFormData,
  DeleteSummitFormData,
  CreateSummitActionResponse,
  UpdateSummitActionResponse,
  UpdateSummitFormData,
  DeleteSummitActionResponse,
} from "@/types/actions";
import { actionClient } from "@/lib/safe-actions";
import { revalidatePath } from "next/cache";

const createPeakSchema = z.object({
  summitDate: z.string().min(1, "La fecha es obligatoria."),
  peakSlug: z.string().min(1, "El slug de la cumbre es obligatorio."),
});
// // const createPeakSchema = zfd.formData({
// //   summitDate: zfd.text(z.string().min(1, "La fecha es obligatoria.")),
// //   peakSlug: zfd.text(z.string().min(1, "El slug de la cumbre es obligatorio.")),
// // });

export async function createSummit(
  prevState: CreateSummitActionResponse | null,
  formData: FormData
): Promise<CreateSummitActionResponse> {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "No estás autenticado.",
    };
  }

  try {
    const rawData: CreateSummitFormData = {
      summitDate: formData.get("summitDate") as string,
      peakSlug: formData.get("peakSlug") as string,
    };

    const validatedData = createPeakSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Por favor solventa los errores del formulario.",
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    await db.summit.create({
      data: {
        userId,
        peakSlug: validatedData.data.peakSlug,
        summitDate: new Date(validatedData.data.summitDate),
      },
    });

    return {
      success: true,
      message: "¡El pico se ha marcado exitosamente como cumbre!",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Ha ocurrido un error inesperado.",
    };
  }
}

// // export const createSummit = actionClient
// //   .schema(createPeakSchema)
// //   .action(async ({ parsedInput: { peakSlug, summitDate } }) => {
// //     const { userId } = await auth();

// //     if (!userId) {
// //       return {
// //         success: false,
// //         message: "No estás autenticado.",
// //       };
// //     }

// //     try {
// //       await db.summit.create({
// //         data: {
// //           userId,
// //           peakSlug,
// //           summitDate: new Date(summitDate),
// //         },
// //       });

// //       return {
// //         success: true,
// //         message: "¡El pico se ha marcado exitosamente!",
// //       };
// //     } catch (error) {
// //       return {
// //         success: false,
// //         message: "Ha ocurrido un error inesperado.",
// //       };
// //     }
// //   });

const updateSummitSchema = z.object({
  summitDate: z.string().min(1, "La fecha es obligatoria."),
  peakSlug: z.string().min(1, "El slug de la cumbre es obligatorio."),
});

export async function updateSummit(
  prevState: UpdateSummitActionResponse | null,
  formData: FormData
): Promise<UpdateSummitActionResponse> {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "No estás autenticado.",
    };
  }

  try {
    const rawData: UpdateSummitFormData = {
      summitDate: formData.get("summitDate") as string,
      peakSlug: formData.get("peakSlug") as string,
    };

    const validatedData = updateSummitSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Por favor solventa los errores del formulario.",
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    await db.summit.update({
      where: {
        userId_peakSlug: {
          userId: userId,
          peakSlug: validatedData.data.peakSlug,
        },
      },
      data: {
        summitDate: new Date(validatedData.data.summitDate),
      },
    });

    return {
      success: true,
      message: "¡El pico encumbrado se ha editado exitosamente!",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Ha ocurrido un error inesperado.",
    };
  }
}

const deleteSummitSchema = z.object({
  peakSlug: z.string().min(1, "El slug de la cumbre es obligatorio."),
});

export async function deleteSummit(
  prevState: DeleteSummitActionResponse | null,
  formData: FormData
): Promise<DeleteSummitActionResponse> {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "No estás autenticado.",
    };
  }

  try {
    const rawData: DeleteSummitFormData = {
      peakSlug: formData.get("peakSlug") as string,
    };

    const validatedData = deleteSummitSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Por favor solventa los errores del formulario.",
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    await db.summit.delete({
      where: {
        userId_peakSlug: {
          userId: userId,
          peakSlug: validatedData.data.peakSlug,
        },
      },
    });

    return {
      success: true,
      message:
        "¡El pico se ha eliminado exitosamente de tu lista de encumbradas!",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Ha ocurrido un error inesperado.",
    };
  }
}

const createSummitSafeSchema = z.object({
  peakSlug: z.string().min(1, "El slug de la cumbre es obligatorio."),
  summitDate: z.date(),
});

const deleteSummitSafeSchema = z.object({
  peakSlug: z.string().min(1, "El slug de la cumbre es obligatorio."),
});

export const createSummitSafeAction = actionClient
  .schema(createSummitSafeSchema)
  .action(async ({ parsedInput: { peakSlug, summitDate } }) => {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "No estás autenticado.",
      };
    }

    try {
      await db.summit.create({
        data: {
          userId,
          peakSlug,
          summitDate,
        },
      });

      revalidatePath("/cumbres");

      return {
        success: true,
        message: "¡El pico se ha marcado exitosamente como encumbrado!",
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ha ocurrido un error inesperado.",
      };
    }
  });

export const deleteSummitSafeAction = actionClient
  .schema(deleteSummitSafeSchema)
  .action(async ({ parsedInput: { peakSlug } }) => {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "No estás autenticado.",
      };
    }

    try {
      await db.summit.delete({
        where: {
          userId_peakSlug: {
            userId,
            peakSlug,
          },
        },
      });

      revalidatePath("/cumbres");

      return {
        success: true,
        message: "¡El pico se ha eliminado de tu lista de encumbrados!",
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ha ocurrido un error inesperado.",
      };
    }
  });
