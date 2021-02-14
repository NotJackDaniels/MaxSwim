import React from "react"
import { Button, Text } from "react-native"
import HomeScreenPresenter, { HomeScreenViewInterface } from "./HomeScreenPresenter"

interface Props {
  presenter: HomeScreenPresenter
}

interface State {
  counterText: string
}

export default class HomeScreenView extends React.Component<Props, State> implements HomeScreenViewInterface {
  private readonly presenter: HomeScreenPresenter

  constructor(props: Props) {
    super(props)

    this.presenter = this.props.presenter
    this.presenter.view = this

    this.state = {
      counterText: ""
    }
  }

  componentDidMount() {
    this.presenter.didMount()
  }

  updateCounterText(text: string) {
    this.setState({ counterText: text })
  }

  render() {
    return (<>
      <Text>{this.state.counterText}</Text>
      <Button title={"Counter +1"} onPress={this.presenter.counterAddOne}/>
    </>)
  }
}
