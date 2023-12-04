const backendDataEvents = [
  {
    event_Id: 1,
    created_Date: "2023-11-30",
    created_By_User: "CharitableOrganization1",
    is_Validated: true,
    title: "Earthquake Relief Fund in Nepal",
    description:
      "Help the victims of the recent earthquake in Nepal by contributing to our relief fund.",
    collect_Goal: 100000,
    collected: 45000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?nature",
      },
      {
        type: "Video",
        url: "https://example.com/nepal_earthquake_video.mp4",
      },
    ],
    geo: {
      country: "Nepal",
      province: "Bagmati",
      city: "Kathmandu",
      lat: 27.7172,
      long: 85.324,
    },
    has_Complaints: true,
    complaints: [
      {
        complaint_Id: 1,
        complaint_Date: "2023-11-30",
        reporter_Id: 1001,
        reporter_Name: "UserReporter",
        title: "Issue with Fundraising",
        description:
          "I would like to report an issue related to fundraising for the earthquake relief event in Nepal.",
        media: [
          {
            type: "Image",
            url: "https://source.unsplash.com/random/600x300/?nature",
          },
          {
            type: "Document",
            url: "https://example.com/complaint_document.pdf",
          },
        ],
      },
    ],
  },
  {
    event_Id: 2,
    created_Date: "2023-11-30",
    created_By_User: "CharitableOrganization2",
    is_Validated: true,
    title: "Emergency Aid for Floods in Bangladesh",
    description:
      "Support our efforts to provide emergency aid to regions affected by floods in Bangladesh.",
    collect_Goal: 75000,
    collected: 0,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?landscape",
      },
      {
        type: "Document",
        url: "https://example.com/bangladesh_aid_plan.pdf",
      },
    ],
    geo: {
      country: "Bangladesh",
      province: "Dhaka",
      city: "Dhaka",
      lat: 23.8103,
      long: 90.4125,
    },
    has_Complaints: true,
    complaints: [
      {
        complaint_Id: 2,
        complaint_Date: "2023-11-30",
        reporter_Id: 1002,
        reporter_Name: "UserReporter2",
        title: "Issue with Aid Distribution",
        description:
          "I would like to report an issue related to the distribution of aid for the Bangladesh flood relief event.",
        media: [
          {
            type: "Image",
            url: "https://source.unsplash.com/random/600x300/?people",
          },
          {
            type: "Document",
            url: "https://example.com/bangladesh_complaint_document.pdf",
          },
        ],
      },
    ],
  },
  {
    event_Id: 3,
    created_Date: "2023-11-30",
    created_By_User: "CharitableOrganization3",
    is_Validated: true,
    title: "Aid for Forest Fires in California",
    description:
      "Help us provide assistance to those affected by the forest fires in California.",
    collect_Goal: 120000,
    collected: 0,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?architecture",
      },
      {
        type: "Video",
        url: "https://example.com/california_fire_video.mp4",
      },
    ],
    geo: {
      country: "United States",
      province: "California",
      city: "Los Angeles",
      lat: 34,
      long: -118.2437,
    },
    has_Complaints: false,
    complaints: null,
  },
  {
    event_Id: 4,
    created_Date: "2023-11-30",
    created_By_User: "CharitableOrganization4",
    is_Validated: true,
    title: "Medical Assistance in Africa",
    description:
      "Contribute to our medical assistance project in various regions of Africa.",
    collect_Goal: 90000,
    collected: 55000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?people",
      },
      {
        type: "Video",
        url: "https://example.com/africa_medical_assistance_video.mp4",
      },
    ],
    geo: {
      country: "Africa",
      province: "Various",
      city: "Various",
      lat: 8.7832,
      long: 34.5085,
    },
    has_Complaints: true,
    complaints: [
      {
        complaint_Id: 2,
        complaint_Date: "2023-12-01",
        reporter_Id: 1002,
        reporter_Name: "AnotherUserReporter",
        title: "Issue with Medical Supplies Shipment",
        description:
          "I am reporting an issue related to the shipment of medical supplies for the project in Africa.",
        media: [
          {
            type: "Image",
            url: "https://source.unsplash.com/random/600x300/?health",
          },
          {
            type: "Document",
            url: "https://example.com/complaint_document_africa.pdf",
          },
        ],
      },
    ],
  },
  {
    event_Id: 5,
    created_Date: "2023-12-01",
    created_By_User: "CharitableOrganization5",
    is_Validated: true,
    title: "Educational Scholarships in India",
    description:
      "Support our initiative to provide educational scholarships to underprivileged students in various regions of India.",
    collect_Goal: 50000,
    collected: 25000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?education",
      },
      {
        type: "Video",
        url: "https://example.com/india_scholarships_video.mp4",
      },
    ],
    geo: {
      country: "India",
      province: "Various",
      city: "Various",
      lat: 20.5937,
      long: 78.9629,
    },
    has_Complaints: false,
    complaints: null,
  },
  {
    event_Id: 6,
    created_Date: "2023-12-01",
    created_By_User: "CharitableOrganization6",
    is_Validated: true,
    title: "Environmental Conservation Project in Brazil",
    description:
      "Contribute to our environmental conservation project aimed at preserving biodiversity in different regions of Brazil.",
    collect_Goal: 75000,
    collected: 35000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?environment",
      },
      {
        type: "Video",
        url: "https://example.com/brazil_conservation_video.mp4",
      },
    ],
    geo: {
      country: "Brazil",
      province: "Various",
      city: "Various",
      lat: -14.235,
      long: -51.9253,
    },
    has_Complaints: true,
    complaints: [
      {
        complaint_Id: 3,
        complaint_Date: "2023-12-02",
        reporter_Id: 1003,
        reporter_Name: "User3Reporter",
        title: "Issue with Tree Planting Initiative",
        description:
          "Reporting an issue related to the tree planting initiative in the Brazil conservation project.",
        media: [
          {
            type: "Image",
            url: "https://source.unsplash.com/random/600x300/?tree",
          },
          {
            type: "Document",
            url: "https://example.com/complaint_document_brazil.pdf",
          },
        ],
      },
    ],
  },
  {
    event_Id: 7,
    created_Date: "2023-12-02",
    created_By_User: "CharitableOrganization7",
    is_Validated: true,
    title: "Food Drive for Homeless in the United Kingdom",
    description:
      "Join us in our effort to provide food and support to homeless individuals across different cities in the United Kingdom.",
    collect_Goal: 30000,
    collected: 15000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?food",
      },
      {
        type: "Video",
        url: "https://example.com/uk_food_drive_video.mp4",
      },
    ],
    geo: {
      country: "United Kingdom",
      province: "Various",
      city: "Various",
      lat: 55.3781,
      long: -3.436,
    },
    has_Complaints: false,
    complaints: null,
  },
  {
    event_Id: 8,
    created_Date: "2023-12-02",
    created_By_User: "CharitableOrganization8",
    is_Validated: true,
    title: "Community Health Screenings in Mexico",
    description:
      "Support our community health initiative by contributing to health screenings in different communities across Mexico.",
    collect_Goal: 40000,
    collected: 20000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?healthcare",
      },
      {
        type: "Video",
        url: "https://example.com/mexico_health_screenings_video.mp4",
      },
    ],
    geo: {
      country: "Mexico",
      province: "Various",
      city: "Various",
      lat: 23.6345,
      long: -102.5528,
    },
    has_Complaints: true,
    complaints: [
      {
        complaint_Id: 4,
        complaint_Date: "2023-12-03",
        reporter_Id: 1004,
        reporter_Name: "User4Reporter",
        title: "Concerns About Medical Equipment",
        description:
          "Expressing concerns about the quality of medical equipment used in the Mexico health screenings.",
        media: [
          {
            type: "Image",
            url: "https://source.unsplash.com/random/600x300/?medical",
          },
          {
            type: "Document",
            url: "https://example.com/complaint_document_mexico.pdf",
          },
        ],
      },
    ],
  },
];

const secondBackendDataEvents = [
  {
    event_Id: 9,
    created_Date: "2023-12-03",
    created_By_User: "CharitableOrganization9",
    is_Validated: true,
    title: "Clean Water Project in Southeast Asia",
    description:
      "Join us in providing access to clean water in various communities across Southeast Asia.",
    collect_Goal: 60000,
    collected: 20000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?water",
      },
      {
        type: "Video",
        url: "https://example.com/southeast_asia_water_project_video.mp4",
      },
    ],
    geo: {
      country: "Various",
      province: "Various",
      city: "Various",
      lat: 10.7769,
      long: 106.7009,
    },
    has_Complaints: false,
    complaints: null,
  },
  {
    event_Id: 10,
    created_Date: "2023-12-03",
    created_By_User: "CharitableOrganization10",
    is_Validated: true,
    title: "Youth Empowerment Program in South America",
    description:
      "Support our initiative to empower youth through education and skill development in South America.",
    collect_Goal: 50000,
    collected: 15000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?education",
      },
      {
        type: "Video",
        url: "https://example.com/south_america_youth_empowerment_video.mp4",
      },
    ],
    geo: {
      country: "Various",
      province: "Various",
      city: "Various",
      lat: -14.235,
      long: -51.9253,
    },
    has_Complaints: true,
    complaints: [
      {
        complaint_Id: 5,
        complaint_Date: "2023-12-04",
        reporter_Id: 1005,
        reporter_Name: "User5Reporter",
        title: "Concerns About Educational Resources",
        description:
          "Expressing concerns about the adequacy of educational resources in the South America youth empowerment program.",
        media: [
          {
            type: "Image",
            url: "https://source.unsplash.com/random/600x300/?books",
          },
          {
            type: "Document",
            url: "https://example.com/complaint_document_south_america.pdf",
          },
        ],
      },
    ],
  },
  {
    event_Id: 11,
    created_Date: "2023-12-04",
    created_By_User: "CharitableOrganization11",
    is_Validated: true,
    title: "Support for Elderly in Europe",
    description:
      "Contribute to our efforts to provide support and companionship to elderly individuals in various cities across Europe.",
    collect_Goal: 40000,
    collected: 25000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?elderly",
      },
      {
        type: "Video",
        url: "https://example.com/europe_elderly_support_video.mp4",
      },
    ],
    geo: {
      country: "Various",
      province: "Various",
      city: "Various",
      lat: 51.1657,
      long: 10.4515,
    },
    has_Complaints: false,
    complaints: null,
  },
  {
    event_Id: 12,
    created_Date: "2023-12-04",
    created_By_User: "CharitableOrganization12",
    is_Validated: true,
    title: "Art and Culture Festival in Oceania",
    description:
      "Support our cultural festival project promoting art and cultural diversity in different regions of Oceania.",
    collect_Goal: 55000,
    collected: 30000,
    media: [
      {
        type: "Image",
        url: "https://source.unsplash.com/random/600x300/?art",
      },
      {
        type: "Video",
        url: "https://example.com/oceania_cultural_festival_video.mp4",
      },
    ],
    geo: {
      country: "Various",
      province: "Various",
      city: "Various",
      lat: -24.9949,
      long: 139.3394,
    },
    has_Complaints: false,
    complaints: null,
  },
];

export { backendDataEvents, secondBackendDataEvents };
