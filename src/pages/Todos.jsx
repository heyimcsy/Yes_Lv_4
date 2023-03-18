import React from 'react'
import styled from 'styled-components'
import TodosList from '../features/todo/TodosList'
import { Layout } from '../components'
import { Wrapper, Text } from '../elem'

const Todos = () => {
  return (
    <Layout>
      <Wrapper mg="24px 0">
        <Text size="32">내 할일</Text>
      </Wrapper>
      <StContainer>
        <TodosList />
      </StContainer>
    </Layout>
  )
}

export default Todos

const StContainer = styled.div`
  height: calc(100% - 45px - 48px);
`
