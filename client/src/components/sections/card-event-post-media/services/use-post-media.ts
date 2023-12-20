import { eventApi } from "@/app/(main)/services/event-api-service";

import { HTTP_METHODS } from "@/models";


// interface MediaItem {
//   originalFileName: string;
//   type: string;
//   url: string;
// }

interface MediaData {
  event_Id: number;
  media: string; // media es un array de MediaItem
}

export const postMediaApi = eventApi.injectEndpoints({
  endpoints: (build) => ({
    postMedia: build.mutation<string[], Partial<MediaData>>({
      query: (mediaData) => ({
        url: `/${mediaData.event_Id}/Media`,
        method: HTTP_METHODS.POST,
        body: mediaData.media,
      }),
    }),
  }),
});
