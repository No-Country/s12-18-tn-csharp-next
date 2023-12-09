using s12.Entities.DbSet;
namespace s12.Entities.Dtos.Responses;

public record Create_Event_Response(
    Event? event_Created, string message, bool isSuccessfully
);

public record Get_Event_Response(
    Event? Event, string message, bool isSuccessfully
);

public record Get_Events_Response(
    IEnumerable<Event>? Events, string message, bool isSuccessfully
);

public record Get_Complaints_Response(
    IEnumerable<Complaint>? Complaints, string message, bool isSuccessfully
);

public record Get_Complaint_Response(
    Complaint? Complaint, string message, bool isSuccessfully
);

public record Create_Complaint_Response(
    Complaint? Complaint_Created, string message, bool isSuccessfully
);
