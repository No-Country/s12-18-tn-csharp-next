namespace s12.Entities.DbSet;

public class Event
{
    public int Id { get; set; }
    public DateTime Created_Date { get; set; } = DateTime.UtcNow;
    public string User_Id { get; set; }
    public bool Is_Validated { get; set; } = false;
    public string Description { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public Geo Geo { get; set; }
    public string Event_Owner_Email { get; set; } = string.Empty;
    public ICollection<Media> Media_Collection { get; set; } = new List<Media>();
    public bool Has_Complaints { get; set; } = false;
    public List<Complaint> Complaints { get; set; }
    public int Goal { get; set; }
    public decimal Money_Collected { get; set; } = 0;
}

public class Geo
{
    public string Country { get; set; }
    public string Provice { get; set; }
    public string City { get; set; }
    public double Lat { get; set; }
    public double Long { get; set; }
}

// TODO: Move this to common
public class Media
{
    public string Type { get; set; }
    public string Url { get; set; }
}

public enum Media_Type
{
    Image,
    Video,
    Audio,
    Document,
}