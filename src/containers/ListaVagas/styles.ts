import styled from 'styled-components'

export const Page = styled.div`
  width: min(980px, 92vw);
  margin: 28px auto 56px;
  display: grid;
  gap: 14px;
`

export const Grid = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
`

export const Empty = styled.div`
  padding: 18px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px dashed ${({ theme }) => theme.colors.borderStrong};
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`
export const Footer = styled.footer`
  margin-top: 18px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 18px 50px rgba(20, 18, 32, 0.08);
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 800;
    text-decoration: none;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom-color: rgba(171, 160, 242, 0.7);
  }
`

