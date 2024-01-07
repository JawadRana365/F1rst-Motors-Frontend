import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import axiosClient from '../../utils/helpers/server';
import { useNavigate } from 'react-router-dom';
import { setAdmin } from '../../redux/admin/adminSlice';
import NavBarContainer from '../../components/navBar/NavBar';
import { toast } from 'react-toastify';
import ProductCard from '../../components/cards/ProductCard';

export default function ProductsListing() {

  const admin = useSelector((state) => state.adminReducer.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [cars,setCars] = useState()

  useEffect(() => {
    if(!admin && localStorage.getItem('loginToken')){
      axiosClient.get(`admin/jwt/my-profile`).then(resp => {
        if(resp?.response?.status === 403){
          navigate("/login")
        }else{
          dispatch(setAdmin(resp.data.data.user))
          axiosClient.get(`products/product-data`).then(resp => {
            if(resp.data.response === 200){
              setCars(resp.data.data.product)
            }else{
              toast.error("We are not able to process your request please try again", {
                position: toast.POSITION.TOP_CENTER,
            })
            }
          })
        }
      })
    }else{
      navigate("/login")
    }
  },[])


  return (
    <>
      <NavBarContainer/>
      <section className="bg-white-50 dark:bg-slate-300 p-8">
          <div className="w-100 mx-auto bg-transparent dark:bg-transparent">
            <div className="grid grid-cols-1 gap-4 p-6 mt-2 md:grid-cols-4 ">
              { cars && cars.map((car) => (
                <ProductCard car={car}/>
              ))}
            </div>
          </div>
      </section>
    </>
  )
}
