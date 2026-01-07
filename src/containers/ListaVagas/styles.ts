import styled from 'styled-components'

export const Page = styled.main`
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 40px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  margin-top: 16px;
`

export const Empty = styled.p`
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`

export const Footer = styled.footer`
  margin-top: 28px;
  padding: 18px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  a:hover {
    opacity: 0.9;
  }
`
