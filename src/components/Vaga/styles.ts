import styled from 'styled-components'
import type React from 'react'

export const Card = styled.li`
  list-style: none;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 18px 50px rgba(20, 18, 32, 0.1);
  backdrop-filter: blur(10px);
  display: grid;
  gap: 10px;
`

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.02em;
`

export const Meta = styled.p`
  margin: 4px 0 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
`

type TagVariant = 'lavender' | 'coral' | 'orange'

export const Tag = styled.span<
  React.HTMLAttributes<HTMLSpanElement> & { $variant?: TagVariant }
>`
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  white-space: nowrap;

  background: ${({ $variant }) => {
    if ($variant === 'coral') return 'rgba(242, 90, 56, 0.14)'
    if ($variant === 'orange') return 'rgba(242, 144, 87, 0.14)'
    return 'rgba(171, 160, 242, 0.18)'
  }};
`

export const Desc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-wrap: wrap;
`

export const Button = styled.a<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  background: ${({ theme }) => theme.colors.surfaceStrong};
  color: rgba(20, 18, 32, 0.92);
  font-size: 13px;
  font-weight: 700;
  transition: transform 0.12s ease, box-shadow 0.12s ease,
    border-color 0.12s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(171, 160, 242, 0.55);
    box-shadow: 0 14px 28px rgba(20, 18, 32, 0.12);
  }
`
