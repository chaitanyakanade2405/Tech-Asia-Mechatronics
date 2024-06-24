import DataTable from "react-data-table-component";
import "./Products.css"
function Products() {

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "TITLE",
      selector: (row) => row.title,
    },
    {
      name: "DESCRIPTION",
      selector: (row) => row.description,
    },
    {
      name: "PRICE",
      selector: (row) => row.price,
    },
    {
      name: "IMAGES",
      selector: (row) => <div className="images-container"><img src={row.image} /></div>
    },
  ]
  const product = [
    {
      "id": 1,
      "title": "AIR STERILIZER CONTROLLER",
      "description": "It is controller for Air sterilizer an filter designed for our client, It operates is filtering process also count filter life in hour and reminds to filter replacement time",
      "price": "500",
      "image": "https://techasiamechatronics.com/wp-content/uploads/2019/08/AIR-STERILZER-CONTROLLER.jpg",
    },

    {
      "id": 2,
      "title": "Digital Timer (tA-01T)",
      "description": "Automatic Condenser motor speed Control",
      "price": "500",
      "image": "https://techasiamechatronics.com/wp-content/uploads/2019/08/TIMER.jpg"

    },
    {
      "id": 3,
      "title": "Condenser Motor Speed",
      "description": "Automatic Condenser motor speed Control",
      "price": "980",
      "image": "https://techasiamechatronics.com/wp-content/uploads/2019/08/DVCB.jpg"

    }
  ]

  return (
    <>
  
        <div className="products-main-container"><DataTable
          columns={columns}
          data={product}

        /></div>
   
    </>

  )
}
export default Products;