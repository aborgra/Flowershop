import { getFlowers } from "./flowers/FlowerProvider.js";
import { FlowerListComponent } from "./flowers/FlowersList.js";
import { getRetailers } from "./retailers/RetailerProvider.js";
import { RetailerListComponent } from "./retailers/RetailerList.js";
import { getDistributors } from "./distributors/DistributorProvider.js";
import { getNurseries } from "./nurseries/NurseryProvider.js";
import { getNurseryDistributor } from "./nurseries/NurseryDistributorProvider.js";
import { getNurseryFlower } from "./nurseries/NurseryFlowerProvider.js";
import { getColors } from "./colors/ColorsProvider.js";

getFlowers()
getRetailers()
.then(getDistributors)
.then(getNurseries)
.then(getNurseryDistributor)
.then(getNurseryFlower)
.then(getColors)
.then(RetailerListComponent)
