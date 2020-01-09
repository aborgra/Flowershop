let distributors = []

export const useDistributors = () => distributors.slice()

export const getDistributors = () => fetch("http://localhost:8088/distributors")
    .then(res => res.json())
    .then(parsedDistributors => distributors = parsedDistributors)