// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, isActive, clickGradientDirectionItem} = props
  const {value, displayText} = item
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }
  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
