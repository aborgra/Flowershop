const RetailerComponent = (retailer, distributor) => {
  return `
    <section class="employee">
          <header>
              <h2>${retailer.name}</h2>
          </header>
          <section class="content">
          <div>Address: 
              <p>${retailer.address}</p>
              <p>${retailer.city}, ${retailer.state}</p>
          </div>
          <div>Distributor: ${distributor.name}</div>
          </section>
    </section>
  `
}

export default RetailerComponent