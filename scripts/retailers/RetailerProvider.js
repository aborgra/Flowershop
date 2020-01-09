let retailers = []

export const useRetailers = () => retailers.slice()

export const getRetailers = () => fetch("http://localhost:8088/retailers")
    .then(res => res.json())
    .then(parsedRetailers => retailers = parsedRetailers)