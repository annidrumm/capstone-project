import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../icons/back.svg'
import { ReactComponent as Browse } from '../../icons/browse.svg'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

HeaderFavourites.propTypes = {
  headline: PropTypes.string,
}

export default function HeaderFavourites({ headline }) {
  const history = useHistory()

  function handleClick() {
    history.goBack()
  }

  return (
    <Header>
      <ArrowStyled onClick={handleClick} />
      <HeadlineStyled>{headline}</HeadlineStyled>
      <Switch>
        <Route>
          <Link to="/categories">
            <BrowseStyled />
          </Link>
        </Route>
      </Switch>
    </Header>
  )
}

const Header = styled.section`
  display: flex;
  grid-column: 1/3;
`

const HeadlineStyled = styled.h2`
  display: inline;
  font-weight: 300;
  color: var(--font-color-white);
  padding-bottom: 5px;
  margin: 20px auto;
`
const ArrowStyled = styled(Arrow)`
  fill: var(--darkgreen);
  left: 10px;
  margin-top: 25px;
  cursor: pointer;
`
const BrowseStyled = styled(Browse)`
  right: 10px;
  margin-top: 25px;
  cursor: pointer;
  fill: var(--darkgreen);
`
