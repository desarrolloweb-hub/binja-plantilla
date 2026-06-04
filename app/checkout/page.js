"use client";
import Breadcrumb from "@/components/Breadcrumb";
import NiceSelect from "@/components/NiceSelect";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { useState } from "react";
const page = () => {
  const [payment, setPayment] = useState("");
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"Checkout"} />
      <section className="checkout-section fix section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" method="post">
                <div className="row g-4">
                  <div className="col-md-5 col-lg-4 col-xl-3">
                    <div className="checkout-radio">
                      <p className="primary-text">Select any one</p>
                      <div className="checkout-radio-wrapper">
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input me-1"
                            id="cCard"
                            name="pay-method"
                            defaultValue="Credit/Debit Cards"
                            checked={
                              payment == "Credit/Debit Cards" ? true : false
                            }
                            onClick={() => setPayment("Credit/Debit Cards")}
                          />
                          <label htmlFor="cCard">Credit/Debit Cards</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input me-1"
                            id="paypal"
                            name="pay-method"
                            defaultValue="PayPal"
                            checked={payment == "PayPal" ? true : false}
                            onClick={() => setPayment("PayPal")}
                          />
                          <label htmlFor="paypal">PayPal</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input me-1"
                            id="payoneer"
                            name="pay-method"
                            defaultValue="Payoneer"
                            checked={payment == "Payoneer" ? true : false}
                            onClick={() => setPayment("Payoneer")}
                          />
                          <label htmlFor="payoneer">Payoneer</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input me-1"
                            id="visa"
                            name="pay-method"
                            defaultValue="Visa"
                            checked={payment == "Visa" ? true : false}
                            onClick={() => setPayment("Visa")}
                          />
                          <label htmlFor="visa">Visa</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input me-1"
                            id="mastercard"
                            name="pay-method"
                            defaultValue="Mastercard"
                            checked={payment == "Mastercard" ? true : false}
                            onClick={() => setPayment("Mastercard")}
                          />
                          <label htmlFor="mastercard">Mastercard</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input me-1"
                            id="fastPay"
                            name="pay-method"
                            defaultValue="Fastpay"
                            checked={payment == "Fastpay" ? true : false}
                            onClick={() => setPayment("Fastpay")}
                          />
                          <label htmlFor="fastPay">Fastpay</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-8 col-xl-9">
                    <div className="checkout-single-wrapper">
                      <div className="checkout-single boxshado-single">
                        <h4>Billing address</h4>
                        <div className="checkout-single-form">
                          <div className="row g-4">
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  type="text"
                                  name="user-first-name"
                                  id="userFirstName"
                                  required=""
                                  placeholder="First Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  type="text"
                                  name="user-last-name"
                                  id="userLastName"
                                  required=""
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  type="email"
                                  name="user-check-email"
                                  id="userCheckEmail"
                                  required=""
                                  placeholder="Your Email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <NiceSelect />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-single">
                                <textarea
                                  name="user-address"
                                  id="userAddress"
                                  placeholder="Address"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout-single checkout-single-bg">
                        <h4>Payment Methods</h4>
                        <div className="checkout-single-form">
                          <p className="payment">{payment}</p>
                          <div className="row g-3">
                            <div className="col-lg-12">
                              <div className="input-single">
                                <label htmlFor="userCardNumber">
                                  Card number
                                </label>
                                <input
                                  type="number"
                                  name="user-card-number"
                                  id="userCardNumber"
                                  placeholder="0000 0000 0000 0000"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <label htmlFor="userCardDate">
                                  Expiry date
                                </label>
                                <input
                                  type="text"
                                  id="userCardDate"
                                  placeholder="DD/MM/YY"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <label htmlFor="userCvc">Cvc / Cvv</label>
                                <input
                                  type="text"
                                  maxLength={3}
                                  name="user-card-cvc"
                                  id="userCvc"
                                  required=""
                                  placeholder="3 Digits"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-single">
                                <label htmlFor="userCardName">
                                  Name on card
                                </label>
                                <input
                                  type="text"
                                  name="user-card-name"
                                  id="userCardName"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="input-single input-check payment-save">
                          <input
                            type="checkbox"
                            className="form-check-input me-1"
                            name="save-for-next"
                            id="saveForNext"
                          />
                          <label htmlFor="saveForNext">
                            Save for my next payment
                          </label>
                        </div>
                        <div className="mt-4">
                          <Link href="checkout" className="theme-btn">
                            <span> Payment Now</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
