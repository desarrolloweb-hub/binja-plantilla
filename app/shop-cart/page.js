"use client";
import Breadcrumb from "@/components/Breadcrumb";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"Shop Cart"} />
      <section className="cart-section section-padding">
        <div className="container">
          <div className="main-cart-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="cart-wrapper">
                  <div className="cart-items-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cart-item">
                          <td className="cart-item-info">
                            <img
                              src="assets/img/product/cart.jpg"
                              alt="Image"
                            />
                          </td>
                          <td className="cart-item-price">
                            $ <span className="base-price">325.00</span>
                          </td>
                          <td>
                            <div className="cart-item-quantity">
                              <span className="cart-item-quantity-amount" />
                              <div className="cart-item-quantity-controller">
                                <a href="#0" className="cart-increment">
                                  <i className="far fa-caret-up" />
                                </a>
                                <a href="#0" className="cart-decrement">
                                  <i className="far fa-caret-down" />
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="cart-item-price">
                            $ <span className="total-price" />
                          </td>
                          <td className="cart-item-remove">
                            <a href="#0">
                              <i className="fas fa-times" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cart-wrapper-footer">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        name="promo-code"
                        id="promoCode"
                        placeholder="Promo code"
                      />
                      <button type="submit" className="theme-btn">
                        <span>Apply Code</span>
                      </button>
                    </form>
                    <Link href="shop-cart" className="theme-btn">
                      <span>Update Cart</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-xl-6">
                <div className="cart-pragh-box">
                  <div className="cart-graph">
                    <h4>Cart Total</h4>
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>$510.00</span>
                      </li>
                      <li>
                        <span>Shipping</span>
                        <span>$10</span>
                      </li>
                      <li>
                        <span>Total</span>
                        <span>$510.00</span>
                      </li>
                    </ul>
                    <div className="chck">
                      <Link href="checkout" className="theme-btn">
                        <span>Checkout</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
