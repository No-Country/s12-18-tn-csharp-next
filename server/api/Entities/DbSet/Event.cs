namespace s12.Entities.DbSet;

public class Event
{
    public int Event_Id { get; set; }
    public DateTime Created_Date { get; set; } = DateTime.UtcNow;
    public string User_Id { get; set; }
    public string Created_By_User { get; set; }
    public bool Is_Validated { get; set; } = false;
    public string Description { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public Geo Geo { get; set; }
    public string Event_Owner_Email { get; set; } = string.Empty;
    public List<Media> Media { get; set; } = new List<Media>();
    public bool Has_Complaints { get; set; } = false;
    public List<Complaint> Complaints { get; set; }
    public int Collect_Goal { get; set; }
    public decimal Collected { get; set; } = 0;
    public int Donors_Count { get; set; }
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
    public string OriginalFileName { get; set; }
    public string Type { get; set; }
    public string Url { get; set; }
}

public class MediaStream
{
    public string Type { get; set; }
    public string FileName { get; set; }
    public Stream Stream { get;set; }
}

public enum Media_Type
{
    Image,
    Video,
    Audio,
    Document,
}