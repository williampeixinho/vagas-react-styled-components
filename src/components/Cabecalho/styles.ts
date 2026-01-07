import styled from 'styled-components'

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  padding: 16px 18px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 18px 50px rgba(20, 18, 32, 0.1);
  backdrop-filter: blur(10px);
`

export const Brand = styled.div`
  display: grid;
  gap: 2px;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  letter-spacing: -0.02em;
`

export const Sub = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
`

export const Badge = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  border: 1px solid rgba(171, 160, 242, 1);
  background: rgba(171, 160, 242, 1);
  color: rgba(20, 18, 32, 1);
  white-space: nowrap;
`
