## Endpoints
### Auth
#### POST /auth/register 
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **Required**.|
| `email` | `string` | **Required**.|
| `password` | `string` | **Required**.|
| `dni` | `string` | **Required**.|
| `dateOfBirth` | `Date` | **Required**.|
| `gender` | `string` | **Required**.|
| `bank_Details` | `Bank_Details` | Optional |

```
"Bank_Details": {
    "account_Number": int,
    "type": "string",
    "bank": "string"
  }
```

#### POST /auth/login
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `email` | `string` | **Required**.|
| `password` | `string` | **Required**.|

Response

```
jwt: string
```
### Events
#### GET /Events?pageSize=0&pageNumber=0

Response
```
[
  {
    "event_Id": int,
    "created_Date": DateTime,
    "created_By_User": string,
    "is_Validated": bool,
    "title": string,
    "description": string,
    "collect_Goal": int,
    "collected": int,
    "media": [
      {
        "type": string, 
        "url": string
      },
      .
      .
      .
    ],
    "geo": {
      "country": string,
      "provice": string,
      "city": string,
      "lat": decimal,
      "long": decimal 
    },
    "has_Complaints": bool,
    "complaints": [
      {
        "complaint_Id": int,
        "complaint_Date": DateTime,
        "reporter_Id": int,
        "reporter_Name": string,
        "title": string,
        "description": string,
        "media": [
          {
            "type": string,
            "url": string
          },
          .
          .
          .
        ]
      },
      .
      .
      .
    ]
  },
  .
  .
  .
]
```

#### GET /Events/{event_id}

```
Response
{
    "event_Id": int,
    "created_Date": DateTime,
    "created_By_User": string,
    "is_Validated": bool,
    "title": string,
    "description": string,
    "collect_Goal": int,
    "collected": int,
    "media": [
      {
        "type": string, 
        "url": string
      },
      .
      .
      .
    ],
    "geo": {
      "country": string,
      "provice": string,
      "city": string,
      "lat": decimal,
      "long": decimal 
    },
    "has_Complaints": bool,
    "complaints": [
      {
        "complaint_Id": int,
        "complaint_Date": DateTime,
        "reporter_Id": int,
        "reporter_Name": string,
        "title": string,
        "description": string,
        "media": [
          {
            "type": string,
            "url": string
          },
          .
          .
          .
        ]
      },
      .
      .
      .
    ]
  }
```

#### GET /Events/{event_id}/complaints

```
Response
[
 {
        "complaint_Id": int,
        "complaint_Date": DateTime,
        "reporter_Id": int,
        "reporter_Name": string,
        "title": string,
        "description": string,
        "media": [
          {
            "type": string,
            "url": string
          },
          .
          .
          .
        ]
  },
  .
  .
  .
]
```
#### GET /Events/{event_id}/complaints/{complaint_id}

```
Response
{
        "complaint_Id": int,
        "complaint_Date": DateTime,
        "reporter_Id": int,
        "reporter_Name": string,
        "title": string,
        "description": string,
        "media": [
          {
            "type": string,
            "url": string
          },
          .
          .
          .
        ]
  }
```
### POST /Events
**Not fully implemented**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | **Required**.|
| `description` | `string` | **Required**.|
| `collect_Goal` | `string` | **Required**.|
| `collected` | `string` | **Required**.|
| `geo` | `Geo` | **Required**.|

```
  "geo": {
    "country": "string",
    "provice": "string",
    "city": "string",
    "lat": decimal,
    "long": decimal
  }
```

```
Response
{
  "event_Id": int,
  "created_Date": DateTime,
  "created_By_User": string,
  "is_Validated": false,
  "title": string,
  "description": string,
  "collect_Goal": int,
  "collected": decimal,
  "media": null,
  "geo": {
    "country": "string",
    "provice": "string",
    "city": "string",
    "lat": decimal,
    "long": decimal
  },
  "has_Complaints": false,
  "complaints": null
}
```

#### POST /Events/{event_id}/complaints

**Not fully implemented**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | **Required**.|
| `description` | `string` | **Required**.|
| `media` | `IFromFile[]` | Optional |

```
Response
{
  "complaint_Id": int,
  "complaint_Date": DateTime,
  "reporter_Id": int,
  "reporter_Name": string,
  "title": string,
  "description": string,
  "media": [
    {
      "type": string,
      "url": string
    },
    .
    .
    .
  ]
}
```

### Protected
#### GET /api/Protected

**Requires valid token**

```
Response
{
  "message": "You are authenticated",
  "claims": [
    {
      "type": string,
      "value": string
    },
    .
    .
    .
  ]
}
```