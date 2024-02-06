import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom"
const DetailProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate()
  const [products, setProducts] = useState({})
  const [images,setImages] = useState([])

  const fetchData = async () => {
    const res = await axios.get('https://dummyjson.com/products/' + id)
    setProducts(res.data)
    setImages(res.data.images)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="mt-5 bg-secondary">
      <div className="mb-5">&nbsp;</div>
      <div className="card mb-3 mx-3">
        <div className="row g-0 mx-5 mt-5">
          <div className="col-md-5 mb-5">
            <img src={images[0]} className="img-fluid rounded" style={{width: '100%'}}/>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title fs-2 mb-0">{products?.title}</h5>
              <div className="card-text fs-5 mb-2">{products?.description}</div>
              <p className="card-text">
                <div className="text-muted fs-6">
                  brand: {products?.brand} <br />
                  rate: {products?.rating} <br />
                  stock: {products?.stock} <br />
                </div>
              </p>
            </div>
          </div>
          <div className="my-3 text-center">
            <div onClick={() => navigate('/products/')} className="btn btn-dark bg-gradient mb-0 col-3">Back</div>
          </div>
        </div>
      </div>

      <div className="card mx-3">
        <div className="row g-0 mx-3 my-3">
          <div className="my-3 mx-2 d-flex justify-content-center flex-wrap">
            {products?.images?.map((item, i) => (
              <div key={i}>
                  <div className="mx-2">{<img src={item} style={{ width: 250 }} />}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5">&nbsp;</div>
    </div>
  )
}

export default DetailProduct