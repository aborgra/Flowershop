let nurseryFlower = []

export const useNurseryFlower = () => nurseryFlower.slice()

export const getNurseryFlower = () => fetch("http://localhost:8088/nurseryFlower")
    .then(res => res.json())
    .then(parsedNurseryFlower => nurseryFlower = parsedNurseryFlower)