import styled from 'styled-components'

export const HeroWrap = styled.section`
  padding: 40px 18px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(
      135deg,
      rgba(171, 160, 242, 0.22),
      rgba(102, 79, 156, 0.4)
    ),
    ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 18px 60px rgba(20, 18, 32, 0.1);
  text-align: center;
  backdrop-filter: blur(10px);
`

export const Title = styled.h2`
  margin: 0;
  font-size: clamp(26px, 3vw, 40px);
  letter-spacing: -0.03em;
`

export const Text = styled.p`
  margin: 10px auto 0;
  max-width: 60ch;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.55;
`
