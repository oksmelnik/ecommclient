import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchProduct, updateProduct } from '../actions/products'
import ProductForm from './ProductForm'

class ProductDetails extends PureComponent {
  state = {
      edit: false
    }

toggleEdit = () => {
  this.setState({
    edit: !this.state.edit
  })
}

componentWillMount(props) {
  this.props.fetchProduct(this.props.match.params.id)
}

updateProduct = (product) => {
  this.props.updateProduct(this.props.match.params.id, product)
  this.toggleEdit()
}
  render() {
    const {product} = this.props
     if (!product) return null

    return (
      <div>
        <h1>{ product.name }</h1>
        {
               this.state.edit &&
               <ProductForm initialValues={product} onSubmit={this.updateProduct} />
             }
        {
        !this.state.edit &&
        <div>
        <h1>{ product.price }</h1>
        <h1>{ product.description }</h1>
        <button onClick={this.toggleEdit}>Edit</button>
        </div>
      }

      </div>
    )
}
}


  const mapStateToProps = function (state, props) {
    return {
      product: state.product
    }
  }

export default connect(mapStateToProps, { fetchProduct, updateProduct })(ProductDetails);
