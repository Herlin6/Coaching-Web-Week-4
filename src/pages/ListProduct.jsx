import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ListProduct = () => {
  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [categories,setCategories] = useState("")
  const [rating,setRating] = useState(0)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSetRating = (e) =>{
    setRating(e.target.value)
  }
  const handleSetCategories = (e) =>{
    setCategories(e.target.value.toLowerCase().replace(" ","-"))
  }
  // useEffect(()=>{
  //   console.log(categories);
  // },[categories])
  const fetchData = async () => {
    const res = await axios.get('https://dummyjson.com/products')
    setProducts(res.data.products)
  }
  useEffect(() => {
    fetchData()
  }, []);
  if(rating == 0){
    if(categories.length == 0 || categories == "all-products"){
      var filteredProducts = products
    }else{
      var filteredProducts = products.filter(product => product.category == categories)
    }
  }else if(rating == "rating1"){
    if(categories.length == 0 || categories == "all-products"){
      var filteredProducts = products.filter(product => product.rating>=4 && product.rating<=4.3)
    }else{
      var filteredProducts = products.filter(product => product.category == categories && product.rating>=4 && product.rating<=4.3)
    }
  }else if(rating == "rating2"){
    if(categories.length == 0 || categories == "all-products"){
      var filteredProducts = products.filter(product => product.rating>=4.4 && product.rating<=4.7)
    }else{
      var filteredProducts = products.filter(product => product.category == categories && product.rating>=4.4 && product.rating<=4.7)
    }
  }else if(rating == "rating3"){
    if(categories.length == 0 || categories == "all-products"){
      var filteredProducts = products.filter(product => product.rating>=4.8 && product.rating<=5)
    }else{
      var filteredProducts = products.filter(product => product.category == categories && product.rating>=4.8 && product.rating<=5)
    }
  }else{
    if(categories.length == 0 || categories == "all-products"){
      var filteredProducts = products
    }else{
      var filteredProducts = products.filter(product => product.category == categories)
    }
  }

  return (
    <div className="bg-secondary bg-gradient mt-5">
      <div className="mb-5">&nbsp;</div>

        <div className="p-1 d-flex justify-content-center gap-2">
          <select onChange={handleSetCategories} style={{width: '50rem', height: '55px'}} className="form-select form-select-lg" aria-label=".form-select-lg example">
            <option defaultValue>All Products</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home Decoration</option>
          </select>
          <span role="button" onClick={handleShow} className="rating_filter text-center bg-white fs-4 p-2 rounded text-dark" style={{width:'50px'}}> <i class="bi bi-star-half"></i> </span>
        </div>

        <Modal size="sm" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Rating filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <input onClick={handleSetRating} type="radio" className="btn-check" value="rating0" name="options" id="option0"/>
              <label className="w-50 my-2 btn btn-secondary" htmlFor="option0">All Rating</label><br/>
              <input onClick={handleSetRating} type="radio" className="btn-check" value="rating1" name="options" id="option1"/>
              <label className="w-50 my-2 btn btn-secondary" htmlFor="option1">Rating 4 - 4.3</label><br/>
              <input onClick={handleSetRating} type="radio" className="btn-check" value="rating2" name="options" id="option2"/>
              <label  className="w-50 my-2 btn btn-secondary" htmlFor="option2">Rating 4.4 - 4.7</label><br/>
              <input onClick={handleSetRating} type="radio" className="btn-check" value="rating3" name="options" id="option3"/>
              <label className="w-50 my-2 btn btn-secondary" htmlFor="option3">Rating 4.7 - 5</label><br/>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
          {filteredProducts.map((item, i) => (
              <div key={i} className="">
                  <div className="product_card card h-100 p-2 rounded-4" style={{width: '16rem'}}>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{height: '330px'}}><img src={item?.images[0]} className="card-img-top p-1"/></td>
                        </tr>
                        <tr>
                          <td className="p-2 align-top" style={{height: '100px'}}>
                            <h5 className="card-title mb-0">{item?.title}</h5>
                            <div className="">Rate: {item?.rating}</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">
                            <span className="bg-success p-2 rounded text-light">${item?.price}</span>
                            <div onClick={() => navigate('/products/' + item.id)} className="btn btn-primary mb-1 mx-1">Detail</div>
                          </td>
                        </tr>
                      </tbody>
                      </table>
                  </div>
              </div>
          ))}
        </div>
        <div className="mt-5">&nbsp;</div>
      </div>
  )
}

export default ListProduct