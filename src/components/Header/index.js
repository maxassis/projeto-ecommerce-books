import React from 'react'
import * as S from './styled'




function Header() {
    return(
        <>
        <S.Container>
        <S.Title><S.Linki to="/">Bookstore</S.Linki></S.Title>

        <S.Menu>
        <S.Item1>BOOKS</S.Item1>
        <S.Item>AUDIOBOOKS</S.Item>
        <S.Item>STATIONARY & GIFTS</S.Item>
        <S.Item>BLOG</S.Item>
        </S.Menu>

        <S.Icons>

        <S.UserIcon/>
        <S.SearchIcon/>
        <S.Linki to="/business"><S.LockIcon/></S.Linki>

        </S.Icons>



        </S.Container>
        
        
        
        
        
        </>





    )



}

export default Header