import React from 'react'
import styled from 'styled-components/macro'
import fork from '../../icons/fork.svg'
import dumbbell from '../../icons/gym.svg'
import lipsticks from '../../icons/beauty.svg'
import mannequin from '../../icons/mannequin.svg'
import vase from '../../icons/vase.svg'
import plane from '../../icons/plane.svg'
// import influencerData from '../../mocks/influencer.json'

export default function CategoryButtons() {
  // I tried to use react hooks but ran in the problem how to change url, routes and to display the filtered array on different pages.
  // const [list, setList] = useState(influencerData)
  // function filterCategories(category) {
  //   setList(
  //     influencerData.filter(function (profile) {
  //       return profile.categories.includes(category)
  //     })
  //   )
  // }

  return (
    <>
      <ContainerStyled>
        <section>
          <a href="/food">
            <ButtonStyled
              category="food"
              // onClick={() => filterCategories('Food')}
            >
              <IconsStyled src={fork} alt="fork and spoon" />
              <H2Styled>Food</H2Styled>
            </ButtonStyled>
          </a>
          <a href="/fitness">
            <ButtonStyled
              category="fitness"
              // onClick={() => filterCategories('Fitness')}
            >
              <IconsStyled src={dumbbell} alt="dumbbell" />
              <H2Styled>Fitness</H2Styled>
            </ButtonStyled>
          </a>
        </section>
        <section>
          <a href="/beauty">
            <ButtonStyled
              category="beauty"
              // onClick={() => filterCategories('Beauty')}
            >
              <img src={lipsticks} alt="lipsticks" />
              <H2Styled>Beauty</H2Styled>
            </ButtonStyled>
          </a>
          <a href="/fashion">
            <ButtonStyled
              category="fashion"
              // onClick={() => filterCategories('Fashion')}
            >
              <img src={mannequin} alt="fashion mannequin" />
              <H2Styled>Fashion</H2Styled>
            </ButtonStyled>
          </a>
        </section>
        <section>
          <a href="/interior">
            <ButtonStyled
              category="interior"
              // onClick={() => filterCategories('Interior')}
            >
              <img src={vase} alt="vase" />
              <H2Styled>Interior</H2Styled>
            </ButtonStyled>
          </a>
          <a href="/travel">
            <ButtonStyled
              category="travel"
              // onClick={() => filterCategories('Travel')}
            >
              <img src={plane} alt="plane" />
              <H2Styled>Travel</H2Styled>
            </ButtonStyled>
          </a>
        </section>
      </ContainerStyled>
    </>
  )
}

const ContainerStyled = styled.section`
  margin-top: 70px;
`

const ButtonStyled = styled.button`
  width: 128px;
  height: 101px;
  background: transparent;
  margin: 10px;
  border-radius: 10%;
  cursor: pointer;
  border-color: ${({ category }) =>
    category === 'food'
      ? 'var(--darkyellow)'
      : category === 'fitness'
      ? 'var(--lightpink)'
      : category === 'beauty'
      ? 'var(--lightgreen)'
      : category === 'fashion'
      ? 'var(--lightblue)'
      : category === 'interior'
      ? 'var(--lightpurple)'
      : 'var(--darkyellow)'};
`
const IconsStyled = styled.img`
  margin-top: 15px;
  vertical-align: top;
`

const H2Styled = styled.h2`
  color: var(--font-color-white);
  font-size: 20px;
  font-weight: var(--font-weight-light);
  vertical-align: bottom;
  margin-bottom: 7px;
  margin-top: 3px;
`
