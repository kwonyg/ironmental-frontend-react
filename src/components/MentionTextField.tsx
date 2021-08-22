import React, { useState } from 'react'
import { Mentions } from 'antd'

const { Option } = Mentions

interface User {
  id: string
  name: string
}

type Props = {
  rows?: number
  autoSize?: boolean
  placeholder?: string
  onChange?: () => void
  // users: User[]
}

const MentionTextField: React.FC<Props> = ({
  rows = 1,
  autoSize = false,
  placeholder,
  onChange,
}) => {
  // mock
  const [users] = useState<User[]>([
    { id: 'feaefgwnj', name: '권영근' },
    { id: 'fhmklrtes', name: '권영순' },
    { id: 'fefeawwnj', name: '이승욱' },
    { id: 'febrrwwnj', name: '이자욱' },
    { id: 'ageewasnj', name: '온대석' },
  ])

  return (
    <Mentions rows={rows} placeholder={placeholder} onChange={onChange}>
      {users.map(user => (
        <Option key={user.id} value={user.name}>
          {user.name}
        </Option>
      ))}
    </Mentions>
  )
}

export default MentionTextField
