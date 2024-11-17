import data from '../static/data.json'

const get = (req, res, next) => {
  const { state, policy } = req.query
  if (state in data && policy in data[state]) {
    res.json(data[state][policy]) 
  } else {
    next({ status: 404 })
  }
}

export default { get }
