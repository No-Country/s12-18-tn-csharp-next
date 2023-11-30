using s12.Controllers;

namespace s12.Services
{
    public class Events_Service
    {
        //TODO  refactor 
        public IList<Event_Get> Events { get; set; }

        public Events_Service()
        {
            Events = Generate_Events();
        }

        //TODO Refactor to service
        private IList<Event_Get> Generate_Events()
        {
            List<Event_Get> eventos = new List<Event_Get>();
            //Event with complaint
            eventos.Add(new Event_Get
            {
                Event_Id = 1,
                Created_Date = DateOnly.FromDateTime(DateTime.Now),
                Created_By_User = "OrganizacionCaritativa1",
                Is_Validated = true,
                Title = "Fondo de Ayuda por Terremoto en Nepal",
                Description = "Ayuda a las víctimas del reciente terremoto en Nepal contribuyendo a nuestro fondo de ayuda.",
                Collect_Goal = 100000,
                Collected = 0,
                Media = new Media[]
                {
                new Media { Type = Media_Type.Image.ToString(), Url = "https://example.com/nepal_terremoto.jpg" },
                new Media { Type = Media_Type.Video.ToString(), Url = "https://example.com/nepal_terremoto_video.mp4" }
                },
                Geo = new Geo
                {
                    Country = "Nepal",
                    Provice = "Bagmati",
                    City = "Kathmandu",
                    Lat = 27.7172,
                    Long = 85.3240
                },
                Complaints = new List<Complaint>
                {
                    new Complaint
                    {
                        Complaint_Id = 1,
                        Complaint_Date =DateOnly.FromDateTime( DateTime.Now.Date),
                        Reporter_Id = 1001,
                        Reporter_Name = "UsuarioReportero",
                        Title = "Problema con la Recaudación de Fondos",
                        Description = "Me gustaría informar sobre un problema relacionado con la recaudación de fondos para el evento de ayuda por terremoto en Nepal.",
                        Media = new Media[]
                        {
                            new Media { Type = Media_Type.Image.ToString(), Url = "https://example.com/complaint_image.jpg" },
                            new Media { Type = Media_Type.Document.ToString(), Url = "https://example.com/complaint_document.pdf" }
                        }
                    }
                }
            });

            eventos.Add(new Event_Get
            {
                Event_Id = 2,
                Created_Date = DateOnly.FromDateTime(DateTime.Now),
                Created_By_User = "OrganizacionCaritativa2",
                Is_Validated = true,
                Title = "Ayuda de Emergencia por Inundaciones en Bangladesh",
                Description = "Apoya nuestros esfuerzos para proporcionar ayuda de emergencia a las regiones afectadas por las inundaciones en Bangladesh.",
                Collect_Goal = 75000,
                Collected = 0,
                Media = new Media[]
                {
                new Media { Type = Media_Type.Image.ToString(), Url = "https://example.com/bangladesh_inundacion.jpg" },
                new Media { Type = Media_Type.Document.ToString(), Url = "https://example.com/bangladesh_plan_ayuda.pdf" }
                },
                Geo = new Geo
                {
                    Country = "Bangladesh",
                    Provice = "Dhaka",
                    City = "Dhaka",
                    Lat = 23.8103,
                    Long = 90.4125
                }
            });

            eventos.Add(new Event_Get
            {
                Event_Id = 3,
                Created_Date = DateOnly.FromDateTime(DateTime.Now),
                Created_By_User = "OrganizacionCaritativa3",
                Is_Validated = true,
                Title = "Ayuda por Incendios Forestales en California",
                Description = "Ayúdanos a proporcionar ayuda a quienes se han visto afectados por los incendios forestales en California.",
                Collect_Goal = 120000,
                Collected = 0,
                Media = new Media[]
                {
                new Media { Type = Media_Type.Image.ToString(), Url = "https://example.com/california_incendio.jpg" },
                new Media { Type = Media_Type.Video.ToString(), Url = "https://example.com/california_incendio_video.mp4" }
                },
                Geo = new Geo
                {
                    Country = "Estados Unidos",
                    Provice = "California",
                    City = "Los Ángeles",
                    Lat = (long)34.0522,
                    Long = -118.2437
                },

            });

            return eventos;
        }
    }
}
