using EpaycoSdk;
using Microsoft.Extensions.Configuration;
using static EpaycoSdk.Epayco;

namespace s12.Services
{
    public class Epayco_PaymentsService
    {
        private readonly Epayco _epayco;
        public Epayco_PaymentsService(IConfiguration conf)
        {
            ////var epayco = conf.GetSection("Payments").GetChildren();
            string puk = conf.GetSection("Payments:Epayco:PUBLIC_KEY")?.Value;
            var pik = conf.GetSection("Payments:Epayco:PRIVATE_KEY")?.Value;
            _epayco = new Epayco(puk, pik, "es", true);
        }

        public LinkModel CreatePaymentLink(PaymentModel model)
        {
            //validate model
            LinkModel r = _epayco
                .CreateLink(
                    model.Amount.ToString(), 
                    model.Title, model.Description, 
                    model.Email, 
                    currency: "COP",
                    methodConfirmation: model.RedirectUrl
                );
            return r;
        }

        public class PaymentModel
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public decimal Amount { get; set; }
            public string Email { get; set; }
            public string  RedirectUrl { get; set; }
        }
    }
}
