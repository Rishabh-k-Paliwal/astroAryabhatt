export const getMeetLink = (date) => {
    // Option 1: One permanent link for all consultations
    // return "https://meet.google.com/xxx-yyyy-zzz";

    // Option 2: Date-specific links (useful for different days)
    const meetLinks = {
        "2024-07-01": "https://meet.google.com/abc-defg-hij",
         "2024-07-02": "https://meet.google.com/klm-nopq-rst",
        // Add more dates as needed
    };

    return meetLinks[date] || "https://meet.google.com/your-permanent-link"; // Fallback to your primary link
};