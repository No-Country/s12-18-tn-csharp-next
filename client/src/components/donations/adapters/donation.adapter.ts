import { DonationModel } from "../models";

export const donationAdapter = (donation: DonationModel) => ({
    donation_Amount: donation.amount,
    donation_Message: donation.message
});