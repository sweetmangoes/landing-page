import { google } from 'googleapis';

export default async function handler(req, res) {
  
  console.log(`hello from waitlist submit`)

  if (req.method !== 'POST') {
    return res.status('405').send({ message: 'Only POST requests are allowed' });
  }

  const body = {
    fullName: req.body.fullName,
    email: req.body.email, 
    country: req.body.country,
    province: req.body.province
  }

  console.log(`body: ${body}`)

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: 'A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            body.fullName, 
            body.email,
            body.country,
            body.province
          ]
        ]
      }
    });

    return res.status('200').json({ data: response.data });


  } catch (e) {
    console.error(e);
    return res.status('500').send({ message: 'Something went wrong' })
  }
}