const baseUrl = process.env.REACT_APP_BASE_API_URL;
const protocol = process.env.REACT_APP_API_PROTOCOL || 'https';

const fetcher = async (route, options = {}) => {

  let url = new URL(`${protocol}://${baseUrl}/${route}`)
  const method = options.method || 'get'

  if(method === 'get') {
    Object.keys(options).forEach(key => url.searchParams.append(key, options[key]))
  }

  console.log('fetching ....', url)

  const response = await fetch(url, {
    headers: {
      //'Authorization': `Bearer ${auth.getToken()}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    ...options
  });

  return await response.json()
}

export default fetcher;
