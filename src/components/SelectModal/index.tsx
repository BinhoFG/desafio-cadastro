import * as Select from '@radix-ui/react-select'
import { Content, Option, Viewport } from './styles'

interface SelectModalProps {
  options: string[]
}

export function SelectModal({ options }: SelectModalProps) {
  return (
    <Select.Portal>
      <Content>
        <Viewport>
          <Select.Group>
            {options.map((option, i) => {
              return (
                <Option key={i} value={option}>
                  <Select.ItemText>{option}</Select.ItemText>
                </Option>
              )
            })}
          </Select.Group>
        </Viewport>
      </Content>
    </Select.Portal>
  )
}
