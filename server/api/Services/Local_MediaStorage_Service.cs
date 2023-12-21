using Microsoft.EntityFrameworkCore;
using s12.Entities.DbSet;
using s12.Entities.Dtos.Responses;

namespace s12.Services
{
    public class Local_MediaStorage_Service
    {
        public string Subfolder { get; set; } = "";
        public string Base_Folder { get; private set; } = "media";
        public virtual string Base_Root { get; private set; } = "wwwroot";

        public Local_MediaStorage_Service() { }

        /// <summary>
        /// Store on local path, needs to update behavieur when stream leng is 0, or failed to storage, add retries, generate new GUID etc and return a result with the actual status. example this stream has been succesfully stored, wrapping the Media Object
        /// </summary>
        /// <param name="media"></param>
        /// <returns></returns>
        public async Task<List<Media>> SaveMediaAsync(MediaStream[] media)
        {
            var theMedia = new List<Media>();
            if (media.Any())
            {
                //store the media
                foreach (var item in media)
                {
                    var newName = Guid.NewGuid().ToString() + "." + item.FileName.Split(".").Last();

                    if (item.Stream.Length == 0) continue;

                    try
                    {
                        using (Stream file = File.Create($"{Base_Root}/{Base_Folder}/{newName}"))
                        {
                            await CopyStream(item.Stream, file);
                        }
                    }
                    catch (Exception e)
                    {
                        //Log(e)l
                        throw;
                    }

                    theMedia.Add(new Media
                    {
                        Type = item.Type,
                        Url = $"media/{newName}",
                        OriginalFileName = item.FileName,
                    });
                }
            }

            return theMedia;

            async Task CopyStream(Stream input, Stream output)
            {
                byte[] buffer = new byte[8 * 1024];
                int len;
                while ((len = await input.ReadAsync(buffer, 0, buffer.Length)) > 0)
                {
                    await output.WriteAsync(buffer, 0, len);
                }
            }
        }
    }

    //TODO implement this
    public class Media_Storage_Result
    {
        public bool HasErrors { get; init ; }
        public List<MediaStorageErrors> Errors { get; init ; }
        public List<Media> Media { get; init ; }
    }

    public class MediaStorageErrors
    {
        public string Reason { get; set; }
        public string FileName { get; set; }
    }
}
