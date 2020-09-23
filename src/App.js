import React, { useState, useEffect } from 'react'
import { saveLocally, loadLocally } from './lib/localStorage'
import { Switch, Route } from 'react-router-dom'
import NavigationPage from './pages/NavigationPage/NavigationPage.js'
import CreateProfile from './components/CreateProfile/CreateProfile.js'
import Profile from './components/Profile/Profile.js'
import CategoryPage from './pages/CategoryPage/CategoryPage.js'
import InfluencerList from './pages/InfluencerList/InfluencerList.js'
import influencerData from './mocks/influencer.json'
import HeaderInfluencerList from './components/Header/HeaderInfluencerList'
import HeaderFavourites from './components/Header/HeaderFavourites'
import HeaderCreateProfile from './components/Header/HeaderCreateProfile'

export default function App() {
  const [influencers, setInfluencers] = useState(
    loadLocally('influencers') ?? influencerData
  )

  useEffect(() => {
    saveLocally('influencers', influencers)
  }, [influencers])

  const [userProfile, setUserProfile] = useState(
    loadLocally('userProfile') ?? []
  )
  useEffect(() => saveLocally('userProfile', userProfile), [userProfile])

  return (
    <Switch>
      <Route exact path="/">
        <NavigationPage />
      </Route>
      <Route path="/create">
        <CreateProfile
          onCreateProfile={(profile) =>
            setUserProfile([...userProfile, profile])
          }
        />
      </Route>
      <Route path="/profile">
        <HeaderCreateProfile headline="Your profile" />
        {userProfile?.map(
          (
            {
              username,
              categories,
              follower,
              gender,
              birthday,
              location,
              languages,
            },
            index
          ) => (
            <Profile
              key={username}
              username={username}
              categories={categories}
              follower={follower}
              gender={gender}
              birthday={birthday}
              location={location}
              languages={languages}
            />
          )
        )}
      </Route>
      <Route exact path="/categories">
        <CategoryPage />
      </Route>
      <Route path="/influencerList">
        <HeaderInfluencerList headline="Browse" />
        <InfluencerList
          influencerData={influencers}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/food">
        <HeaderInfluencerList headline="Browse" />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Food')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/fitness">
        <HeaderInfluencerList headline="Browse" />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Fitness')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/beauty">
        <HeaderInfluencerList headline="Browse" />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Beauty')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/fashion">
        <HeaderInfluencerList headline="Browse" />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Fashion')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/interior">
        <HeaderInfluencerList headline="Browse" />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Interior')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/travel">
        <HeaderInfluencerList headline="Browse" />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Travel')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/favourites">
        <HeaderFavourites headline="Favourites" />
        <InfluencerList
          onFavouriteClick={toggleFavourite}
          influencerData={influencers.filter((profile) => profile.isFavourite)}
        />
      </Route>
    </Switch>
  )

  function toggleFavourite(influencer) {
    const index = influencers.indexOf(influencer)
    setInfluencers([
      ...influencers.slice(0, index),
      { ...influencer, isFavourite: !influencer.isFavourite },
      ...influencers.slice(index + 1),
    ])
  }
}
