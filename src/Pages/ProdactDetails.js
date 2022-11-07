import { useParams } from "react-router-dom";

function ProdactDetails() {
    const params = useParams()

    console.log(params.productId)
  return (
    <section>
      <h1>Prodact Detail</h1>
      {params.productId}
    </section>
  );
}

export default ProdactDetails;
