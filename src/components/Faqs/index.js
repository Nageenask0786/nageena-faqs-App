import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="faqs-container">
        <div className="card">
          <ul>
            {faqsList.map(each => (
              <FaqItem key={each.id} faqDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
