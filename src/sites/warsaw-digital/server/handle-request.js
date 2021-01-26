function handleRequest(req, res) {
  res.status(200).send(
    `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      </head>
      <body>
        <div>
          Welcome to Warsaw Digital!
        </div>
      </body>
    </html>` 
  )
}

export default handleRequest
