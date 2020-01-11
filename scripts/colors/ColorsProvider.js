let colors = []

export const useColors = () => colors.slice()

export const getColors = () => fetch("http://localhost:8088/colors")
    .then(res => res.json())
    .then(parsedColors => colors = parsedColors)