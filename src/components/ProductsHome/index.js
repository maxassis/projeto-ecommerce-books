import React, {useEffect, useState, useContext} from 'react'
import * as S from './styled'
import Point from '../../images/Ellipse 3.png'
import axios from 'axios'
import BraveImg from '../../images/brave_new_world.svg'
import EducatedImg from '../../images/educated.svg'
import CrazyImg from '../../images/crazy_rich_asians.svg'
import HandmaidsImg from '../../images/the_handmaids_tale.svg'
import {contextState} from '../../context/contextState'


function ProductsHome() {
    const [buy, setBuy] = useContext(contextState)
    const [books, setBooks] = useState([])
    


    useEffect(() => {
        axios.get('http://localhost:3333/books').then((response) => {
            setBooks(response.data)
        }).catch(error => {
            console.log(error.response)
        })
        
      }, []); 

     console.log(buy)

    

    return(
        <>
        <S.Container>

        <S.ListGender>
        <S.List>
            <S.ListItem1><S.Point src={Point} alt="ponto" />Categories</S.ListItem1>
            <S.ListItem><S.Linki to="/business" target="_top">Art & Fashion</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Biography</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Business</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Children`s</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Education</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Fiction & Poetry</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top"> Education</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Film, TV & Drama</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Food & Drink</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Film, TV & Drama</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Health & Wellbeing</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">History & Politics</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Home & Garden</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Languages with Grant</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Sport & Hobbies</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business" target="_top">Travel & Maps</S.Linki></S.ListItem>     
        </S.List>
        </S.ListGender>


         {books.map(function (book) {
          return  <S.ContainerProducts>
          <div>   
            { book.author === "Kevin Kwan" ? <img src={CrazyImg} alt="brave" /> : "" }
            { book.author === "Margaret Atwood" ? <img src={HandmaidsImg} alt="brave" /> : "" }
            { book.author === "Aldous Huxley" ? <img src={BraveImg} alt="brave" /> : "" }
            { book.author === "Tara Westover" ? <img src={EducatedImg} alt="brave" /> : "" } 
          </div>
  
          <S.Description>
          <S.Autor>{book.author}</S.Autor>
          <S.BookTitle>{book.title}</S.BookTitle>
          <S.Review>{book.review}</S.Review>
          <S.BookData>{book.description}</S.BookData>
          <S.Price>{book.price}</S.Price><S.Price2>{book.prince_discount}</S.Price2><br/>
          <S.Button onClick={()=>{setBuy(book.title)}}><S.Linki to="/cart">BUY NOW</S.Linki></S.Button>
          </S.Description>
  
      </S.ContainerProducts>
        })}  

    
        </S.Container>
        
                
        </>


    )


}
export default ProductsHome