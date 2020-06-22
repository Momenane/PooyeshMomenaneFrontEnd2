import React ,{useReducer,useState}from 'react'
import Footer from './Footer'
import Carousel from './Carousel'
import './index.css'
import MainBanner from './MainBanner'

export default () => {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")

  //not work in broswer 10 expected a string or number
  // const [footerFormInput ,setFooterFormInput]=useReducer(
  //   (state,newState)=>({state,...newState}),
  //    {
  //     name1:"aaaa",
  //     email1:"dddd",
  //     description1:"222"
  //    },{name:'name',email:"email",description:"description"}
  //   )
    
    const onChangeHandler = event => {
      const { name, value} = event.target;
      if(name==='name'){
        setName(value)
      }else if(name==='email'){
        setEmail(value)
      }else {
        setDescription(value)
      }

    };

    // const onChangeHandler = event => {
    //   const { name, value} = event.target;
    //   setFooterFormInput({[name]: value});
    // };

    const handleSubmit=(e)=>{
      e.preventDefault();
        console.log('handle submit form')
    }

  return ( 
    <>
    <MainBanner/>
    <Carousel/>
    <Footer
      onChange={onChangeHandler}
      onSubmitForm={handleSubmit}
       valueName={name}
      fName={'name'}
       valueEmail={email}
      emailName={'email'}
       valueDesc={description}
      descName={'description'}
    />

     {/* <Footer
      onChange={onChangeHandler}
      onSubmitForm={handleSubmit}
       valueName={footerFormInput.name}
      fName={'name'}
       valueEmail={footerFormInput.email}
      emailName={'email'}
       valueDesc={footerFormInput.description}
      descName={'description'}

    /> */}


    </>
  )
}
