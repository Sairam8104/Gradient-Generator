// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const MainHeading = styled.h1`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  font-family: 'roboto';
`
export const Heading = styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  font-family: 'roboto';
  text-align: center;
`
export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ColorsPickersDescription = styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  font-family: 'roboto';
  text-align: center;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ColorValue = styled.p`
color:#ffffff
font-size: 20px;
  font-weight: 500;
  font-family: 'roboto';
  text-align: center;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
