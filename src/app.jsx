import { Logo } from './logo'
import * as Mantine from '@mantine/core';

export function App(props) {
  return (
    <>
      <Mantine.Container>
        <Logo />
        <p>Hello Vite + Preact!</p>
        <p>
          <Mantine.TextInput
            placeholder="This is Mantine.TextInput"
          />
          <Mantine.Space h="md" />
          <Mantine.Select
            placeholder="This is Mantine.Select"
            data={['Foo', 'Bar', 'Baz']}
          />
        </p>
      </Mantine.Container>
    </>
  )
}
