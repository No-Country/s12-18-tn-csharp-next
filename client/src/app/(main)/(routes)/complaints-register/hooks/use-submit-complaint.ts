"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useSubmitComplaint = () => {
  const { id } = useParams();

  //console.log(`Este es el Id del evento: ${id}`);

  const navigation = useRouter();

  const submitComplaint = async (event_id: number, formData: FormData) => {
    try {
      // Verificar si el FormData contiene archivos de medios
      if (formData.has("Media_Collection")) {
        console.log("El FormData contiene archivos de medios");
      } else {
        console.log("El FormData NO contiene archivos de medios");

        const mediaFiles = formData.getAll("Media_Collection");
        console.log("Archivos de medios en FormData:", mediaFiles);
      }

      const response = await fetch(
        `https://humanitarianaidapi.somee.com/Events/${id}/complaints`,
        {
          method: "POST",
          headers: {
            //'Content-Type': 'multipart/form-data',
          },
          body: formData,
        },
      );

      if (!response.ok) {
        const errorData: any = await response.json();
        console.error("Error al enviar el reclamo:", errorData);
        throw new Error("Error al enviar el reclamo");
      }

      console.log("Reclamo enviado correctamente");

      // Muestra una notificación si el reclamo se envía correctamente
      toast.success("El reclamo se envió correctamente.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, 
      });

      //Si el envío fue exitoso a los 4 segunos se redirige a al home.
      setTimeout(() => {
        navigation.push("/");
      }, 4000);

    } catch (err: any) {
      console.error("Error al enviar el reclamo", err);

      if (err && typeof err === "object" && "errors" in err) {
        console.error("Detalles de validación:", err.errors);
      }
      throw err;
    }
  };

  return { submitComplaint };
};

export { useSubmitComplaint };