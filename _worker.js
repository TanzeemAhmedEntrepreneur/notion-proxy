addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  

  const notionPageUrl = 'https://navy-sunspot-585.notion.site/Tanzeem-Ahmed-1cd390ff798f80159ef2d65d3ea3d7ca' 
  
  const response = await fetch(notionPageUrl, {
    method: 'GET',
    headers: request.headers,
  })


  const modifiedHeaders = new Headers(response.headers)
  modifiedHeaders.set('X-Frame-Options', 'ALLOWALL')
  

  const modifiedResponse = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: modifiedHeaders
  })

  return modifiedResponse
}