/* "use client"
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../../components/ui/card";
import { useParams } from "next/navigation";

interface Complaint {
  complaint_Id: number;
  complaint_Date: {
    year: number;
    month: number;
    day: number;
    dayOfWeek: number;
    dayOfYear: number;
    dayNumber: number;
  };
  reporter_Id: number;
  reporter_Name: string;
  title: string;
  description: string;
  media: Media[];
}

interface Media {
  type: string;
  url: string;
}

interface ComplaintsViewProps {
  complaintsData: Complaint[];
}

interface DateInfo {
    year: number;
    month: number;
    day: number;
  }

const ComplaintsPage = ({ complaintsData }: ComplaintsViewProps) => {
    const { id } = useParams();
    const [fetchedData, setFetchedData] = useState<Complaint[] | null>(null); // Inicializado como null
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (id) {
            const response = await fetch(`https://s12csharpnext.somee.com/Events/${id}/complaints`);
            
            if (response.ok) {
              const data = await response.json();
              setFetchedData(data);
            } else {
              console.error("Failed to fetch data");
            }
          } else {
            console.error("Invalid id parameter");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, [id]); // Agregado id como dependencia del efecto
  
    const formatDate = (dateString: string) => {
      if (!dateString) {
        return "Fecha inválida";
      }
    
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString();
      return formattedDate;
    };

    console.log(fetchedData)
  
    return (
      <div className="w-screen px-5 md:px-[20%] h-[50%]">
        <h1 className="text-center mt-3">Reclamos</h1>
        <div className="my-5">
          <section className="">
            {fetchedData === null ? (
              <p className="text-center text-lg font-semibold mt-24">Esperando datos...</p>
            ) : fetchedData.length === 0 ? (
              <Card className="h-56 border-black flex justify-center items-center">
                <p className="font-semibold text-lg">No hay reclamos en este evento.</p>
              </Card>
            ) : (
              fetchedData.map((complaint) => (
                <Card key={complaint.complaint_Id} className="border-black">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold hover:underline">{complaint.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><b>Nombre del reclamante:</b> {complaint.reporter_Name}.</p>
                    <p><b>Descripción del reclamo:</b> {complaint.description}</p>
                    <p><b>Fecha del reclamo:</b> {(formatDate as any)(complaint.complaint_Date)}.</p>
                  </CardContent>
                </Card>
              ))
            )}
          </section>
        </div>
      </div>
    );
  };
  
  export default ComplaintsPage; */


  "use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Complaint {
  complaint_Id: number;
  complaint_Date: string;
  reporter_Id: string;
  reporter_Name: string;
  title: string;
  description: string;
  media: Media[];
}

interface Media {
  type: string;
  url: string;
  originalFileName: string;
}

interface ComplaintsViewProps {
  complaintsData: Complaint[];
}

const formatDate = (dateString: string) => {
  if (!dateString) {
    return "Fecha inválida";
  }

  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString();
  return formattedDate;
};

const ComplaintsPage = ({ complaintsData }: ComplaintsViewProps) => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState<Complaint[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await fetch(
            `https://humanitarianaidapi.somee.com/Events/${id}/complaints`,
          );

          if (response.ok) {
            const data = await response.json();
            setFetchedData(data);
          } else {
            console.error("Failed to fetch data");
          }
        } else {
          console.error("Invalid id parameter");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const renderMedia = (mediaItem: Media, index: number) => {
    const { type, url, originalFileName } = mediaItem;

    if (type.startsWith("image/")) {
      // Si es una imagen, renderizarla
      return (
        <div>
            <img
              src={`https://humanitarianaidapi.somee.com/${url}`}
              alt={`Imagen ${index}`}
              key={index}
              className="m-auto mt-5 w-[100%] md:w-[80%]"
            />
        </div>
      );
    } else if (type === "application/pdf") {
      // Si es un PDF, renderizar un enlace al PDF
      return (
        <div key={index} className="text-blue-600">
          <Link
            href={`https://humanitarianaidapi.somee.com/${url}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {originalFileName}
          </Link>
        </div>
      );
    } else if (type.startsWith("audio/")) {
      // Archivo de audio, usar elemento de audio HTML
      return (
        <div key={index}>
          Reproducir archivo de audio:{" "}
          <audio controls>
            <source
              src={`https://humanitarianaidapi.somee.com/${url}`}
              type={type}
            />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      );
    } else if (type.startsWith("video/")) {
      // Archivo de video, usar elemento de video HTML
      return (
        <div key={index}>
          Reproducir archivo de video:{" "}
          <video controls className="w-[80%]">
            <source
              src={`https://humanitarianaidapi.somee.com/${url}`}
              type={type}
            />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      );
    } else {
      // Para otros tipos, simplemente mostrar la información del tipo y la URL
      return (
        <div key={index}>
          Tipo: {type}, URL: {url}
        </div>
      );
    }
  };

  return (
    <div className="w-screen h-[50%] px-5 md:px-[20%]">
      <h1 className="mt-3 text-center">Reclamos</h1>
      <div className="my-5">
        <section className="">
          {fetchedData === null ? (
            <p className="mt-24 text-center text-lg font-semibold">
              Esperando datos...
            </p>
          ) : fetchedData.length === 0 ? (
            <Card className="flex h-56 items-center justify-center border-black dark:border-white">
              <p className="text-lg font-semibold">
                No hay reclamos en este evento.
              </p>
            </Card>
          ) : (
            fetchedData.map((complaint) => (
              <Card
                key={complaint.complaint_Id}
                className="mb-5 border-black dark:border-white"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold hover:underline">
                    {complaint.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <b>Nombre del reclamante:</b> {complaint.reporter_Name}.
                  </p>
                  
                  <p className="mt-2">
                    <b>Descripción del reclamo:</b> {complaint.description}
                  </p>
                  <p className="mt-2">
                    <b>Fecha del reclamo:</b>{" "}
                    {formatDate(complaint.complaint_Date)}.
                  </p>

                  {complaint.media && complaint.media.length > 0 && (
                    <div>
                      <p className="mt-2">
                        <b>Archivos Multimedia:</b>
                      </p>
                      <div className="">
                        <ul className="md:flex md:justify-around items-center">{complaint.media.map(renderMedia)}</ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default ComplaintsPage;