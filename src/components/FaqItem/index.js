import {Component} from 'react'

class FaqItem extends Component {
  state = {isClicked: false}

  toggleStatus = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  renderAnswerText = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isClicked} = this.state
    if (isClicked) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderImage = () => {
    const {isClicked} = this.state
    const imgUrl = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isClicked ? 'minus' : 'plus'
    return (
      <button type="button" onClick={this.toggleStatus}>
        <img src={imgUrl} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li>
        <h1>{questionText}</h1>
        <div>
          {this.renderImage()}
          {this.renderAnswerText()}
        </div>
      </li>
    )
  }
}

export default FaqItem
