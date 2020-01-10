import { useRetailers } from "./RetailerProvider.js"
import RetailerComponent from "./Retailers.js"
import { useDistributors } from "../distributors/DistributorProvider.js"
import { useNurseries } from "../nurseries/NurseryProvider.js"
import { useNurseryFlower } from "../nurseries/NurseryFlowerProvider.js"
import { useNurseryDistributor } from "../nurseries/NurseryDistributorProvider.js"
import { useFlowers } from "../flowers/FlowerProvider.js"



const contentTarget = document.querySelector(".retailers")

export const RetailerListComponent = () => {

  const retailers = useRetailers()
  const distributors = useDistributors()
  const nurseries = useNurseries()
  const nursFlowRel = useNurseryFlower()
  const nursDistRel = useNurseryDistributor()
  const flowers = useFlowers()

  const render = () => {
    contentTarget.innerHTML = retailers.map(retailer => {

      const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)


      let nursDistRelation = nursDistRel.filter(nd => nd.distributorId === distributor.id)

      const foundNurseryArray = nursDistRelation.map(ndr => {
        const foundNursery = nurseries.find(nursery => nursery.id === ndr.nurseryId)
        return foundNursery
      })
 
      const flowerArray=foundNurseryArray.map(nursery => {
        const nursFlowRelation = nursFlowRel.filter(nf => nf.nurseryId === nursery.id)

        const foundFlowerArray = nursFlowRelation.map(nfr => {
          let foundFlower = flowers.find(flower => flower.id === nfr.flowerId)
          return foundFlower
        })
        return foundFlowerArray
      })

      



      
     return RetailerComponent(retailer, distributor, foundNurseryArray, flowerArray)}).join("")
  }

  render()

}