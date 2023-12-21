using s12.Entities.DbSet;

namespace s12.Entities.Dtos.Requests;

public record Create_Event_Request(
    string Title,
    string Description,
    int Collect_Goal,
    decimal Collected ,
//bool Is_Validated,
Geo Geo
    //IFormFile[]? Media_Collection
);

public record Create_Complaint_Request(
    string Title,
    string Description,
    string? Reporter_Id,
    string? Reporter_Name,
    IFormFile[]? Media_Collection
);
