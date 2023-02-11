import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  Container,
  MainHeading,
  Heading,
  ListContainer,
  ColorsPickersDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

// Write your code here
const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  clickGradientDirectionItem = value => {
    this.setState({activeGradientDirection: value})
  }

  onClickGenerateButton = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection},${fromColorInput},${toColorInput}`,
    })
  }

  render() {
    const {
      fromColorInput,
      toColorInput,
      activeGradientDirection,
      gradientValue,
    } = this.state
    return (
      <>
        <AppContainer
          gradientValue={gradientValue}
          data-testid="gradientGenerator"
        >
          <Container>
            <MainHeading>Generate a CSS Color Gradient</MainHeading>
            <Heading>Choose Direction</Heading>
            <ListContainer>
              {gradientDirectionsList.map(each => (
                <GradientDirectionItem
                  item={each}
                  key={each.directionId}
                  isActive={each.value === activeGradientDirection}
                  clickGradientDirectionItem={this.clickGradientDirectionItem}
                />
              ))}
            </ListContainer>
            <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
            <ColorPickerContainer>
              <CustomInputAndColorContainer>
                <ColorValue>{fromColorInput}</ColorValue>
                <CustomInput
                  type="color"
                  value={fromColorInput}
                  onChange={this.onChangeFromColor}
                />
              </CustomInputAndColorContainer>
              <CustomInputAndColorContainer>
                <ColorValue>{toColorInput}</ColorValue>
                <CustomInput
                  type="color"
                  value={toColorInput}
                  onChange={this.onChangeToColor}
                />
              </CustomInputAndColorContainer>
            </ColorPickerContainer>
            <GenerateButton onClick={this.onClickGenerateButton}>
              Generate
            </GenerateButton>
          </Container>
        </AppContainer>
      </>
    )
  }
}

export default GradientGenerator
