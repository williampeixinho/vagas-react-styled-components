import styled from 'styled-components'
import type React from 'react'

export const FormWrap = styled.form`
  padding: 18px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 18px 50px rgba(20, 18, 32, 0.1);
  backdrop-filter: blur(10px);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 12px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.label`
  display: grid;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
`

const control = `
  height: 46px;
  border-radius: 12px;
  border: 1px solid rgba(20, 18, 32, 0.14);
  background: rgba(255, 255, 255, 0.92);
  color: rgba(20, 18, 32, 0.92);
  padding: 0 14px;
  font-size: 16px;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;

  &::placeholder {
    color: rgba(20, 18, 32, 0.45);
  }

  &:focus {
    border-color: rgba(171, 160, 242, 0.75);
    box-shadow: 0 0 0 4px rgba(171, 160, 242, 0.22);
    background: rgba(255, 255, 255, 0.98);
  }
`

export const Input = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  ${control}
`

export const Select = styled.select<
  React.SelectHTMLAttributes<HTMLSelectElement>
>`
  ${control}
  appearance: none;
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      rgba(20, 18, 32, 0.55) 50%
    ),
    linear-gradient(135deg, rgba(20, 18, 32, 0.55) 50%, transparent 50%);
  background-position: calc(100% - 18px) 19px, calc(100% - 12px) 19px;
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
`
