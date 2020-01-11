import { useRetailers } from "./RetailerProvider.js"
import RetailerComponent from "./Retailers.js"
import { useDistributors } from "../distributors/DistributorProvider.js"
import { useNurseries } from "../nurseries/NurseryProvider.js"
import { useNurseryFlower } from "../nurseries/NurseryFlowerProvider.js"
import { useNurseryDistributor } from "../nurseries/NurseryDistributorProvider.js"
import { useFlowers } from "../flowers/FlowerProvider.js"
import { useColors } from "../colors/ColorsProvider.js"



const contentTarget = document.querySelector(".retailers")

export const RetailerListComponent = () => {

  const retailers = useRetailers()
  const distributors = useDistributors()
  const nurseries = useNurseries()
  const nursFlowRel = useNurseryFlower()
  const nursDistRel = useNurseryDistributor()
  const flowers = useFlowers()
  const colors = useColors()

  const render = () => {
    contentTarget.innerHTML = retailers.map(retailer => {

      // Map over each retailer to find the distributor whose pk matches the distributor fk on the retailer object
      const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)

      // filter out the objects from the entire nurseryDistributor fetch array where the distributorId fk matches the pk on the distributor
      let nursDistRelation = nursDistRel.filter(nd => nd.distributorId === distributor.id)

      // Map over the new array that contains the objects from the nurseryDistributor join table which match to the correct distributor
      const foundNurseryArray = nursDistRelation.map(ndr => {
        // For each nurseryDistributor object, find the matching nursery object from the nurseries array whose pk matches the nurseryDistributorId FK(returns the first match and stores it)
        const foundNursery = nurseries.find(nursery => nursery.id === ndr.nurseryId)
        return foundNursery
      })
 

      // Map over each nursery in the new array containing the associated nurseries with the current retailer
      const flowerArray=foundNurseryArray.map(nursery => {

        // For each nurseryFlowerRelationship object from the join table fetch, filter the nurseryFlowerRelationship objects (fk) that match with the current nursery id (pk)
        const nursFlowRelation = nursFlowRel.filter(nf => nf.nurseryId === nursery.id)

        // Map over each nurseryFlowerRelation object in the new array
        const foundFlowerArray = nursFlowRelation.map(nfr => {

          // For each nurseryFlowerRelation object, perform a find on the full flowers array from the fetch and compare the flower object id (pk) to the flowerId (fk) on the nurseryFlowerRelation object
          let foundFlower = flowers.find(flower => flower.id === nfr.flowerId)
          
          return foundFlower
        })
        return foundFlowerArray
      })


      const allColorFlowerArrays = []
      // Map over the flowerArray, which contains arrays of the flowers associated with each nursery
      const flowerColorArray = flowerArray.map(flower => {
        // Map over each flower object in each nursery array
        flower.map(fl => {
        // Using the colors array from the fetch, find the color object whose id(pk) matches the colorId(fk) on the flower object
        const color = colors.find(color => color.id === fl.colorId)
        const eachFlowerColorArray = [] 
        // Push each flower and found color to the empty array
        eachFlowerColorArray.push(fl,color)
        // Push each new array into another empty array (creating an array of arrays where each has a flower object and its associated color object)
        allColorFlowerArrays.push(eachFlowerColorArray)
      })
      })

      



      
     return RetailerComponent(retailer, distributor, foundNurseryArray, allColorFlowerArrays)}).join("")
  }

  render()

}