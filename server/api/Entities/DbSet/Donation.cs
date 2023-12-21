using System.ComponentModel.DataAnnotations;

namespace s12.Entities.DbSet
{
    public class Donation
    {
        [Key]
        public int Id { get; set; }
        public int Event_Id { get; set; }
        //Email
        public string Owner_Email { get; set; }
        public string Donor_Name { get; set; }
        public string Donor_Email { get; set; }
        public decimal Donation_Amount { get; set; }
        public string Donation_Date { get; set; }
        public  string? Payment_Id { get; set; }
        public  string? Donation_Message { get; set; }
    }
}
