import * as React from 'react'
import EmailFormSection from './EmailFormSection'
import TechIntroSection from './TechIntroSection'
type Props = {}

const index: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <EmailFormSection />
      <TechIntroSection />
    </div>
  )
}

export default index
