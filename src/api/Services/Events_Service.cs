﻿using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Validations;
using s12.Controllers;
using s12.DataService.Data;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Eventing.Reader;
using System.Net.Mail;

namespace s12.Services
{
    public interface IEvents_Service
    {
        Task<List<Event_Get>> Get_Events_From_User(string owner_Email);
    }

    public class Events_Service : IEvents_Service
    {


        //TODO  refactor for entity 
        public IList<Event_Get> Events { get; set; }

        public Events_Service(IConfiguration configuration/*[FromServices] MyDbContext myDbContext*/)
        {
            #region Delete this, only for  mocked
            var cs = configuration.GetConnectionString("SQLServerConnection");
            var optionsBuilder = new DbContextOptionsBuilder<MyDbContext>();
            optionsBuilder.UseSqlServer(cs);
            var myDbContext = new MyDbContext(optionsBuilder.Options); 
            #endregion
            Events = Generate_Events(myDbContext);
        }

        //TODO Refactor to service
        private IList<Event_Get> Generate_Events(MyDbContext myDbContext)
        {
            List<Event_Get> eventos = new List<Event_Get>();
            //Event with complaint
            eventos.Add(new Event_Get
            {
                Event_Id = 1,
                Event_Owner_Email = "OrganizacionCaritativa1@mail.org",
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
                Event_Owner_Email = "OrganizacionCaritativa2@mail.org",
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
                Event_Owner_Email = "OrganizacionCaritativa3@mail.org",
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


            //TODO this should come from donations_service
            //get donors  count and amount
            var ids = eventos.Select(x => x.Event_Id);
            var donations = myDbContext.Donations.Where(x => ids.Contains(x.Event_Id));

            var calculated = donations.GroupBy(x => x.Event_Id).Select(x => new
            {
                EventId = x.Key,
                Collected = x.Sum(x => x.Donation_Amount),
                Donors = x.Count()
            });

            foreach (var item in calculated)
            {
                var even = eventos.First(x => x.Event_Id == item.EventId);
                even.Collected = item.Collected;
                even.Donors_Count = item.Donors;
            }

            return eventos;
        }

        public Task<List<Event_Get>> Get_Events_From_User(string owner_Email)
        {
            //if is null empty or not a valid email
            if (owner_Email.IsNullOrEmpty() is false)
            {
                try
                {
                    var email = new MailAddress(owner_Email);
                    var res = this.Events.Where(x => x.Event_Owner_Email == owner_Email).ToList();
                    return Task.FromResult(res);
                }
                catch (Exception e)
                {

                    throw new ArgumentException(nameof(owner_Email),e);
                }
            }
            throw new ArgumentNullException(nameof(owner_Email));
        }
    }
}
