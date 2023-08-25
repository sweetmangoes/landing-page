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

  const b64_publicKey = Buffer.from(`MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsSaOMyBKk3Hq9\nHBZN23oRnNKU3stnNB+clcrqTU5/jupB9pr0zvOx/aXGYTItB6ZVnxKCemGUMZna\nnh8a/K/HUr6KHi+0eRQBj76KHWh995uGkmvOAXjBvuIAbdTlt7FokDv0zUARwQ0w\nYp+m9jZ7sJhJVvp5iFGI1oqZt9q09muRAcZHiMrC1BYalnmksIbneWzLR6JV6a18\n6Htu5ob80xEUVvyadYd6MM/1d6rOxhiaPH0OuW7YRztojfyZgPca/peHcT2LSsHf\ngfb+igt6aQCkjzOQMIaf7ajNRC9y1jRd7V/rfJgqhQf49MpVCLlRAlOIx/6o3PLO\nuvLcOjJXAgMBAAECggEABd90vcXMLOZ/IJcmg3zpylPoMb7ufBQgx7urcRU1ic+b\nWKhJW/L6B6U3021YwoQyPVTw0pXNYbnXHsapFMhsTYUajaa9xY8jCXKW8ipSd4jL\nOmkfV6RhM2mIVq9nxHTgjUntYUjl2DUWeAHEo3JdJRY9+rIGU8I71UhK7TaBNA3s\nB0uPtQ2ZbxBztITZQRwj/6aoEyycjHxIaszCDZuwi0lhmI+BmOYb5l7Qx0slLEQA\npaRu+/8bKUVA+A/VTrDJGWLu1NE8DVcj4Q1UsaFX+PfzHmR4y0Pi2AgomZVlbZfg\niq8pmD+jexsuieVxCTgb/981ASjI8mIJYu9Ee1fHQQKBgQDTYis6lyHzUQKQpQ61\nWjIvycO10gpAX940dhjIF2R/u3emo9HwRENX6miM9lYD3/3yRLTpkBkW64BB4Ip7\nKEvbZ7JnAEl9n5OIMMweRSRl9nHWAgO0wOlM9cu4fwmUlteXUatu23HFBryKFcA8\nm4nVoX2ZJCQv2b0V0iCteKrCsQKBgQDQpvppswCRsjuLw9knTcV9afQVpYIrhLti\nNpOOZqnjnqTiFLgjcCCtGat7XRsucuMWykpP1e+CR/IIvGe7XbdPP1N/oCEA8Ym0\n9k6DW21BU2MaUtXYONrO36Wl2ZL0W4BRH4sFEbwEGZ+CHlZdv8gWy8yXg9VMuifp\nQF3VP1G3hwKBgQDEuv7EntfoHiMm/5c6zWEb/Mn6tCr6Ur75UFgsESllf9IR8zF2\nTfHnJrB7UOAo5xTvn2ZIYeYX4MITjakUiiJfZpkxJ6E+G4AxJkkyeuMvSjgUFvfg\nCBKZn8EkSodeFS09FbNZjz7JQkXCtg+d2JxliNDd8DcFmb5TSqdDC6TRYQKBgF0B\noWvOQ7muJgbWBQ0VCKwvt4KSpSR65QARbdKzBpWU2NCCBdaeG6KtZ5f017Hrujgl\ncdyGc12ybjvgp6iITLbBdpnUKgH+qLCGflblQR02a12HgRUBut8uJ+t2wZ+0zczb\nb5+R2SpGtahNl5fwbeNjcs4zELhD3piFfY4ZzHYvAoGACZbCmp+ZxHxXyR01vWGj\nZ2gftJFYTJkh+T08imOby1/Rw6e6biSs9bQpkHW0blfnq5Q1tx1aMJB39a9P9KDf\nETmKbwf7V87xZtHcchUWKCy/FbHq1bHw9hCePG0pNG/MklTj7hAOjBMVA3PIvmDS\nejGaWioGK7RVSzDNDoJHQ9s=`).toString('base64');

  console.log(`body: ${body.email}`)

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: `-----BEGIN PRIVATE KEY-----${b64_publicKey}-----END PRIVATE KEY-----`.replace(/\\n/g, '\n')
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    });

    console.log(`private_key: ${process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')}`);

    const sheets = google.sheets({
      auth,
      version: 'v4',
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
    });

    console.log(`sheets: ${Object.keys(sheets)}`);

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