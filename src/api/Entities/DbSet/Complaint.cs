namespace s12.Entities.DbSet;

public class Complaint
{
    public int Complaint_Id { get; set; }
    public DateTime Complaint_Date { get; set; }
    public int Event_Id { get; set; }
    public string Reporter_Id { get; set; }
    public string Reporter_Name { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public IList<Media> Media { get; set; }
}