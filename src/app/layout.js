
import './globals.css'




export const metadata = {
  title: 'Personal Portfolio',
  description: 'Created with &#10084;',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </head>
      <body >{children}</body>
    </html>
  )
}
