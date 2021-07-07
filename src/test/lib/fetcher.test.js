import fetcher from '../../lib/fetcher'

const fetchMock = (url, options={}) => {
  return new Promise((resolve) =>
    resolve({
      json: () =>
        Promise.resolve({
          list : 'listOfData'
        })
    })
  )
}

beforeAll(() => {
  jest.spyOn(global, "fetch").mockImplementation(fetchMock);
})

afterAll(() => {
  global.fetch.mockClear();
});

it('fetcher test', async () => {
  global.fetch.mockImplementation((url) => fetchMock(url));

  const resp = await fetcher('routeName');
  //console.log(resp, 'resp')
  expect(resp.list).toBe('listOfData')

})
