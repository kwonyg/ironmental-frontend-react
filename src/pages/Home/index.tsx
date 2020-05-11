import * as React from 'react'
import EmailFormSection from './EmailFormSection'
import PhoneIntroSection from './PhoneIntroSection'
import TechIntroSection from './TechIntroSection'
import ArchiveIntroSection from './ArchiveIntroSection'
type Props = {}

const index: React.FunctionComponent<Props> = props => {
  return (
    <>
      <EmailFormSection />
      <PhoneIntroSection />
      <TechIntroSection />
      <ArchiveIntroSection />
    </>
  )
}

export default index
