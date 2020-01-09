import { getFlowers } from "./flowers/FlowerProvider.js";
import { FlowerListComponent } from "./flowers/FlowersList.js";
import { getRetailers } from "./retailers/RetailerProvider.js";
import { RetailerListComponent } from "./retailers/RetailerList.js";
import { getDistributors } from "./distributors/DistributorProvider.js";

getFlowers().then(FlowerListComponent)
getRetailers()
.then(getDistributors)
.then(RetailerListComponent)
