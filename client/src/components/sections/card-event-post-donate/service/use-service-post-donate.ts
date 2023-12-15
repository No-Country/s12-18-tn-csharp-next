import { donationsApi } from "@/app/(main)/services/";

import { HTTP_METHODS } from "@/models";

//  {
//   "donation_Amount": 0,
//   "donation_Message": "string"
// }

interface DonationPost {
  donation_Amount: number;
  donation_Message: string;
}

interface DonationData {
  event_Id: number;
  data: DonationPost;
}

export const postDonationApi = donationsApi.injectEndpoints({
  endpoints: (build) => ({
    postDonation: build.mutation<string[], Partial<DonationData>>({
      query: (mediaData) => ({
        url: `/${mediaData.event_Id}`,
        method: HTTP_METHODS.POST,
        body: mediaData.data,
      }),
    }),
  }),
});
