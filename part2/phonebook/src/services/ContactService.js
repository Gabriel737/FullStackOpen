import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id, setBanner) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => {
    setBanner(`Person has been removed from the database!`)
    return response.data
  }).catch(error => setBanner('Error! That person has already been removed from the database!'))
}

const exports = { getAll, create, update, remove }
export default exports