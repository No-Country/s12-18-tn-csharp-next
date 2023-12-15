import { eventApi } from "@/app/(main)/services/event-api-service";

import { HTTP_METHODS } from "@/models";

interface MediaItem {
  originalFileName: string;
  type: string;
  url: string;
}

interface MediaData {
  id: any; // Asegúrate de que el tipo del id sea el correcto
  media: MediaItem[];
}

export const postMediaApi = eventApi.injectEndpoints({
  endpoints: (build) => ({
    postMedia: build.mutation<string[], Partial<MediaData>>({
      query: (mediaData) => ({
        url: `/${mediaData.id}/media`,
        method: HTTP_METHODS.POST,
        body: mediaData.media,
      }),
    }),
  }),
});
