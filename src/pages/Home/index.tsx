import * as React from 'react'
import EmailFormSection from './EmailFormSection'
import PhoneIntroSection from './PhoneIntroSection'
import TechIntroSection from './TechIntroSection'
type Props = {}

const index: React.FunctionComponent<Props> = props => {
  return (
    <>
      <EmailFormSection />
      <PhoneIntroSection />
      <TechIntroSection />
    </>
  )
}

export default index
