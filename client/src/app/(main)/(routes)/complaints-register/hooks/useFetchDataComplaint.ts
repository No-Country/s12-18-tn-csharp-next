"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Event {
    title: string;
  }

const useFetchDataComplaint = () => {
    const { id } = useParams();

    //console.log(`Este es el Id del evento: ${id}`);
    const [eventData, setEventData] = useState<Event | null>(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
              const response = await fetch(
                `https://humanitarianaidapi.somee.com/Events/${id}`,
              );
    
              if (response.ok) {
                const data = await response.json();
                setEventData(data);
              } else {
                console.error("Failed to fetch data");
              }
        
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, [id]); 
      
      if(eventData != null) {
        //console.log(eventData.title);
      }

      return { eventData };
}

export { useFetchDataComplaint };