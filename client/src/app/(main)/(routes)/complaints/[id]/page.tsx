"use client"
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

  // Obtengo el id de los parámetros de la URL
  const { id } = useParams();
  //console.log(id);


  const [fetchedData, setFetchedData] = useState<Complaint[]>([]);

  //console.log(localStorage);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verifico que id no sea undefined o null
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
  }, []); 

  console.log(fetchedData);

  // Función para dar formato a la fecha
  const formatDate = (dateString: string) => {
    if (!dateString) {
      return "Fecha inválida";
    }
  
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  };

  return (
    <div className="w-screen px-5 md:px-[20%] h-[50%]">
      <h1 className="text-center mt-3">Complaints</h1>
      <div className="my-5">
        <section className="">
          {fetchedData.length === 0 ? (
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
                  <p><b>Reporter:</b> {complaint.reporter_Name}</p>
                  <p><b>Description:</b> {complaint.description}</p>
                  <p><b>Date:</b> {(formatDate as any)(complaint.complaint_Date)}</p>
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