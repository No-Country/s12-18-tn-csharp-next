using s12.Entities.DbSet;

namespace s12.Entities.Dtos.Requests;

public record Create_Event_Request(
    string Title,
    string Description,
    Geo Geo,
    bool Is_Validated,
    int Goal,
    IFormFile[]? Media_Collection
);

public record Create_Complaint_Request(
    string Title,
    string Description,
    string? Reporter_Id,
    string? Reporter_Name,
    IFormFile[]? Media_Collection
);
