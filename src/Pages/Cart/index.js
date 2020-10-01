import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import axios from "axios";
import * as S from "./styled";
import BraveImg from "../../images/brave_new_world.svg";
import EducatedImg from "../../images/educated.svg";
import CrazyImg from "../../images/crazy_rich_asians.svg";
import HandmaidsImg from "../../images/the_handmaids_tale.svg";
import { contextState } from "../../context/contextState";

function Cart() {
  const [buy, setBuy] = useContext(contextState);

  return (
    <>
      <Header />

      <S.Title>
        <S.TitleBussiness>Your cart</S.TitleBussiness>
      </S.Title>

      <S.Container>
        {buy.map(function (book) {
          return (
            <>
              <S.ContainerBook>
                <S.Wrapper>
                  <S.ContainerImage>
                    {book.author === "Kevin Kwan" ? (
                      <S.Image src={CrazyImg} alt="brave" />
                    ) : (
                      ""
                    )}
                    {book.author === "Margaret Atwood" ? (
                      <S.Image src={HandmaidsImg} alt="brave" />
                    ) : (
                      ""
                    )}
                    {book.author === "Aldous Huxley" ? (
                      <S.Image src={BraveImg} alt="brave" />
                    ) : (
                      ""
                    )}
                    {book.author === "Tara Westover" ? (
                      <S.Image src={EducatedImg} alt="brave" />
                    ) : (
                      ""
                    )}
                  </S.ContainerImage>

                  <S.Descriptions>
                    <S.Title2>{book.title}</S.Title2>
                    <S.Author>{book.author}</S.Author>
                    <S.Descript>{book.description}</S.Descript>
                    <S.Valor>{book.price}</S.Valor>
                    <S.ValorFinal>1x R${book.prince_discount}</S.ValorFinal>
                  </S.Descriptions>
                </S.Wrapper>

                <S.TwoButtons>
                  <S.Button>-</S.Button>
                  <S.Button2>+</S.Button2>
                </S.TwoButtons>
              </S.ContainerBook>
            </>
          );
        })}

        {/*  <S.ContainerBook>
          <S.Wrapper>
            <S.ContainerImage>
              <S.Image src={CrazyImg} />
            </S.ContainerImage>

            <S.Descriptions>
              <S.Title2>Crazy rich asians</S.Title2>
              <S.Author>Kevin Kwan</S.Author>
              <S.Descript>
                the outrageously funny debut novel about three super-rich,
                pedigreed Chinese families and the gossip..
              </S.Descript>
              <S.Valor>R$14.99</S.Valor>
              <S.ValorFinal>1x R$14.99</S.ValorFinal>
            </S.Descriptions>
          </S.Wrapper>

          <S.TwoButtons>
            <S.Button>-</S.Button>
            <S.Button2>+</S.Button2>
          </S.TwoButtons>
     </S.ContainerBook> */}

        <S.ContainerSend>
          <S.ButtonSend>
            <S.Linki to="/done">CHECKOUT</S.Linki>
          </S.ButtonSend>
        </S.ContainerSend>
      </S.Container>

      <Footer />
    </>
  );
}

export default Cart;
