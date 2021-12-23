import {Component} from 'react'

import TabItems from '../TabItems'

import ResultItems from '../ResultItems'

import './index.css'

class ImageItem extends Component {
  state = {
    activeTabId: 'FRUIT',
    thumbnailImageIndex: Math.ceil(Math.random() * 29),
    score: 0,
    timer: 5,
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick = () => {
    const {timer} = this.state
    if (timer >= 1) {
      this.setState({
        timer: timer - 1,
      })
    } else {
      clearInterval(this.intervalID)
    }
  }

  compareImageId = activeId => {
    const {imagesList} = this.props
    const {thumbnailImageIndex} = this.state
    const imageObject = imagesList[thumbnailImageIndex]
    const {id} = imageObject
    console.log(id)
    if (activeId === id) {
      this.setState(prevState => ({
        thumbnailImageIndex: Math.ceil(Math.random() * 29),
        score: prevState.score + 1,
      }))
    } else {
      clearInterval(this.intervalId)
      this.setState({timer: 0})
    }
  }

  activeStatus = tabId => {
    this.setState({activeTabId: tabId})
  }

  activeTabList = activeTabId => {
    const {imagesList} = this.props
    const filteredResult = imagesList.filter(
      each => each.category === activeTabId,
    )
    return filteredResult
  }

  render() {
    const {tabsList, imagesList} = this.props

    const {activeTabId, thumbnailImageIndex, score, timer} = this.state
    const thumbnailObject = imagesList[thumbnailImageIndex]
    const {thumbnailUrl} = thumbnailObject
    const activeTabList = this.activeTabList(activeTabId)
    const isTimerCompleted = timer >= 0 

    return (
        {isTimerCompleted ? <div><h1>RESULT</h1></div> : (<div className="background-image-container">
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="score-timer-container">
            <p className="score-para">score {score}</p>
            <p className="timer-img-para">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-logo"
              />
              {timer} Sec
            </p>
          </div>
        </div>
        <img src={thumbnailUrl} className="bg-img-style" alt="thumbnail" />
        <ul className="unordered-list-container">
          {tabsList.map(each => (
            <TabItems
              key={each.tabId}
              tabsDetails={each}
              activeStatus={this.activeStatus}
            />
          ))}
        </ul>
        <ul className="unordered-image-container">
          {activeTabList.map(each => (
            <ResultItems
              key={each.id}
              imagesDetails={each}
              onClickImageAndShow={this.onClickImageAndShow}
              compareImageId={this.compareImageId}
            />
          ))}
        </ul>
      </div>)}
      
    )
  }
}
export default ImageItem
