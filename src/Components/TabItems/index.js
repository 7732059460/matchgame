import './index.css'

const TabItems = props => {
  const {tabsDetails, activeStatus} = props
  const {tabId, displayText} = tabsDetails

  const onActiveTabId = () => {
    activeStatus(tabId)
  }
  return (
    <li className="list-item">
      <button className="button-item" type="button" onClick={onActiveTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
